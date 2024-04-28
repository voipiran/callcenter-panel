#!/bin/bash

echo "Install VOIPIRAN CallCenter Panel"
echo "VOIPIRAN.io"
echo "VOIPIRAN Panel 1.0"
sleep 1

#############################ThePanel

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)

####Install Source Gaurdian Files
echo "------------START-----------------"
echo "INFO: Install sourceguardian Files"
echo "------------Copy SourceGaurd-----------------"
yes | cp -rf $filesPath/sourceguardian/ixed.5.4.lin /usr/lib64/php/modules
yes | cp -rf $filesPath/sourceguardian/ixed.5.4ts.lin /usr/lib64/php/modules
yes | cp -rf /etc/php.ini /etc/php-old.ini
yes | cp -rf $filesPath/sourceguardian/php.ini /etc
echo "INFO: SourceGuardian Files have Moved Sucsessfully"
sleep 1

####Make Directories and Permissions
directory="/var/www/panel"
if [ ! -d "$directory" ]; then
    yes | mkdir -p "$directory"

####Get Git and put to panel
####
####

####Change Folder
cd /var/www/panel

####Copy env
yes | cp .env.example .env
sed -i -e "s/.*DB_PASSWORD.*/DB_PASSWORD=$rootpw/g" .env

####Install Composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/local/bin --filename=composer  > /dev/null
yes | composer install
echo "INFO: Installing Composer Sucsessfully"
sleep 1

####Creat Database
mysql -uroot -p$rootpw -e "CREATE DATABASE IF NOT EXISTS voipiran DEFAULT CHARACTER SET utf8 COLLATE utf8_persian_ci;"
mysql -uroot -p$rootpw -e "GRANT ALL PRIVILEGES ON voipiran.* TO 'root'@'localhost';"
#for create database irouting,number-formatter and etc
yes | php artisan voipiran:db 
#for create dummy data
yes | php artisan voipiran:dummy
#If there is no `settings` table
php artisan migrate --seed
echo "INFO: Databases Created Sucssesfully"

####Make Directories and Permissions
directory="/var/www/html/panel"
if [ ! -d "$directory" ]; then
    yes | mkdir -p "$directory"

####Move Copy
cd  /var/www/panel/public 
yes | mv * .[^.]* /var/www/html/panel
cd ..
yes | rm -rf public 
chmod -R 777 storage
cd /var/www/html/panel
ln -s /var/spool/asterisk/monitor monitor
cd /var/www/html/panel
ln -s /var/www/panel/storage/app storage
ln -s /var/spool/asterisk/monitor customerVoices

####
cd /var/www/panel
php artisan cache:clear
yes | composer dump-autoload

####Add to issabel-htaccess
echo '<Directory "/var/www/html/panel">' >> /etc/httpd/conf.d/issabel-htaccess.conf
echo 'AllowOverride All' >> /etc/httpd/conf.d/issabel-htaccess.conf
echo '</Directory>' >> /etc/httpd/conf.d/issabel-htaccess.conf

## Production
# install node 16 and yarn
# go to `/www/var/www/panel`
# yarn
# yarn watch
# done

## go to `/var/www/panel`
# `yarn production`


#############################CallStats
cd  /var/www/panel

#Asterisk Queue Adaptive
sed -i '/\[options\]/a queue\_adaptive\_realtime\=no' /etc/asterisk/asterisk.conf
sed -i '/\[options\]/a log\_membername\_as\_agent\=no' /etc/asterisk/asterisk.conf

### Add ODBC 
echo "-------------odbc.ini----------------"
echo "" >> /etc/odbc.ini
echo "[voipiran_stats]" >> /etc/odbc.ini
echo "driver=MySQL ODBC 5.3 ANSI Driver" >> /etc/odbc.ini
echo "server=localhost" >> /etc/odbc.ini
echo "database=voipiran_stats" >> /etc/odbc.ini
echo "Port=3306" >> /etc/odbc.ini
echo "Socket=/var/lib/mysql/mysql.sock" >> /etc/odbc.ini
echo "option=3" >> /etc/odbc.ini
echo "charset=utf8" >> /etc/odbc.ini

### Add ODBC 
echo "-------------res_odbc_custom.conf----------------"
echo "" >> /etc/asterisk/res_odbc_custom.conf
echo "[voipiran_stats]" >> /etc/asterisk/res_odbc_custom.conf
echo "enabled=>yes" >> /etc/asterisk/res_odbc_custom.conf
echo "dsn=>voipiran_stats" >> /etc/asterisk/res_odbc_custom.conf
echo "pooling=>no" >> /etc/asterisk/res_odbc_custom.conf
echo "limit=>1" >> /etc/asterisk/res_odbc_custom.conf
echo "pre-connect=>yes" >> /etc/asterisk/res_odbc_custom.conf
echo "username=>root" >> /etc/asterisk/res_odbc_custom.conf
echo "password=>${rootpw}" >> /etc/asterisk/res_odbc_custom.conf

### Add ODBC 
echo "-------------extconfig.conf----------------"
sed -i '/\[settings\]/a queue\_log \=\> odbc\,voipiran\_stats\,queue\_stats' /etc/asterisk/extconfig.conf

### Remove Folder

#############################Survey
cd  /var/www/panel
### Create MiscDest
query="REPLACE INTO miscdests (id,description,destdial) VALUES('100','Survey','4455')"
mysql -hlocalhost -uroot -p$rootpw asterisk -e "$query"

### Copy Survey Files
yes | cp -rf $filesPath/survey/visurvey.php /var/lib/asterisk/agi-bin
chmod 777 /var/lib/asterisk/agi-bin/visurvey.php
chown asterisk:asterisk /var/lib/asterisk/agi-bin/visurvey.php

yes | cp -rf $filesPath/survey/viplayagentinfo.php /var/lib/asterisk/agi-bin
chmod 777 /var/lib/asterisk/agi-bin/viplayagentinfo.php
chown asterisk:asterisk /var/lib/asterisk/agi-bin/viplayagentinfo.php

yes | cp -rf $filesPath/survey/visurvey-customer.php /var/lib/asterisk/agi-bin
chmod 777 /var/lib/asterisk/agi-bin/visurvey-customer.php
chown asterisk:asterisk /var/lib/asterisk/agi-bin/visurvey-customer.php

yes | cp -rf $filesPath/survey/visurvey.ini /var/lib/asterisk/agi-bin
chmod 777 /var/lib/asterisk/agi-bin/visurvey.ini
chown asterisk:asterisk /var/lib/asterisk/agi-bin/visurvey.ini

yes | cp -rf $filesPath/survey/say.conf /etc/asterisk
chmod 777 /etc/asterisk/say.conf
chown asterisk:asterisk /etc/asterisk/say.conf

yes | cp -rf -avr $filesPath/survey/pr/ /var/lib/asterisk/sounds > /dev/null
chmod -R 777 /var/lib/asterisk/sounds/pr
chown -R asterisk:asterisk /var/lib/asterisk/sounds/pr

yes | cp -rf -avr $filesPath/survey/uploads/* /var/www/panel/storage/app/survey/setting > /dev/null
chmod -R 777 /var/www/panel/storage/app/survey/setting
chown -R asterisk:asterisk /var/www/panel/storage/app/survey/setting

chmod -R 777 /var/www/panel/storage/app/survey/voices
chown -R asterisk:asterisk /var/www/panel/storage/app/survey/voices

## macro-dialout-trunk
cat $filesPath/survey/macro-dialout-trunk.txt >> /etc/asterisk/extensions_override_issabelpbx.conf

### Fill visurvey.ini
echo "-------------Create ini File----------------"
echo dbuser = \"root\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbpass = \"$rootpw\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbaddress = \"localhost\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbname = \"visurvey\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo agentRole = \"karshenas\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo \#agentRole = \"operator\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo \#befarmaiidEnable = \"befarmaiid\" >> /var/lib/asterisk/agi-bin/visurvey.ini

### Edit Asterisk Files
sed -i '/\[from\-internal\-custom\]/a include \=\> voipiran\-survey' /etc/asterisk/extensions_custom.conf
echo "" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-survey]" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4455,1,AGI(visurvey.php)" >> /etc/asterisk/extensions_custom.conf

### Add Global Variable
echo "" >> /etc/asterisk/globals_custom.conf
echo "QAGI=viplayagentinfo.php" >> /etc/asterisk/globals_custom.conf

### Remove Folder

### Restart Services
service asterisk reload
systemctl restart httpd

#############################iRouting
cd  /var/www/panel

### Copy Folders
yes | cp -rf $filesPath/irouting/vi-irouting.php /var/lib/asterisk/agi-bin
yes | cp -rf $filesPath/irouting//extensions_voipiran_numberformatter.conf /etc/asterisk
chmod 777 /var/lib/asterisk/agi-bin/vi-irouting.php
chown -R asterisk:asterisk /etc/asterisk/extensions_voipiran_numberformatter.conf
chmod 777 /etc/asterisk/extensions_voipiran_numberformatter.conf

### Add from-pstn Context
echo "" >> /etc/asterisk/extensions_custom.conf
echo "#include extensions_voipiran_numberformatter.conf" >> /etc/asterisk/extensions_custom.conf
echo "[from-pstn-custom]" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,1,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,AGI(vi-irouting.php)" >> /etc/asterisk/extensions_custom.conf

sed -i '/\[from\-internal\-custom\]/a include \=\> voipiran\-irouting\-misc' /etc/asterisk/extensions_custom.conf
echo "" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-irouting-misc]" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,1,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,n,AGI(vi-irouting.php)" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,n,Goto(from-internal-additional,4457,1)" >> /etc/asterisk/extensions_custom.conf

echo "" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-irouting]" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,1,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,n,AGI(vi-irouting.php)" >> /etc/asterisk/extensions_custom.conf

### Create MiscDest
query="REPLACE INTO miscdests (id,description,destdial) VALUES('101','iRouting-misc','4456')"
mysql -hlocalhost -uroot -p$rootpw asterisk -e "$query"


#############################AutoDial
yes | cd  /var/www/panel

rpm -U $filesPath/autodial/issabel-callcenter_4.0.0-4.noarch.rpm
yes | cp -f /opt/issabel/dialer/CampaignProcess.class.php /opt/issabel/dialer/CampaignProcess.class-000.php
yes | cp -rf $filesPath/autodial/CampaignProcess.class.php /opt/issabel/dialer
chmod 777 /opt/issabel/dialer/CampaignProcess.class.php