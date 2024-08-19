#!/bin/bash

echo "Install VOIPIRAN CallCenter Panel"
echo "VOIPIRAN.io"
echo "VOIPIRAN Panel 1.0"
sleep 1

####Make Directories and Permissions
#directory="/var/www/panel"
#if [ ! -d "$directory" ]; then
#    yes | mkdir -p "$directory"

####Get Git and put to panel
####
####

####Change Folder and Permisions
#chown -R asterisk:asterisk /var/www/panel
cd /var/www/panel

#############################ThePanel

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)

####Install Source Gaurdian Files
echo "------------START-----------------"
# Get PHP version
php_version=$(php -r "echo PHP_MAJOR_VERSION;")

# Perform actions based on PHP version
if [ "$php_version" -eq 5 ]; then
    echo "PHP 5 detected. Performing action A."

echo "Install sourceguardian Files"
echo "------------Copy SourceGaurd-----------------"
yes | cp -rf sourceguardian/ixed.5.4.lin /usr/lib64/php/modules
yes | cp -rf sourceguardian/ixed.5.4ts.lin /usr/lib64/php/modules
yes | cp -rf /etc/php.ini /etc/php-old.ini
yes | cp -rf sourceguardian/php5.ini /etc/php.ini
echo "SourceGuardian Files have Moved Sucsessfully"
sleep 1
else
    echo "PHP 7 (or newer) detected. Performing action B."

echo "Install sourceguardian Files"
echo "------------Copy SourceGaurd-----------------"
yes | cp -rf sourceguardian/ixed.7.4.lin /usr/lib64/php/modules
yes | cp -rf /etc/php.ini /etc/php-old.ini
yes | cp -rf sourceguardian/php7.ini /etc/php.ini
echo "SourceGuardian Files have Moved Sucsessfully"
systemctl reload php-fpm  > /dev/null

####Add from-internal-custom
# File to check
FILE="/etc/asterisk/extensions_custom.conf"

# Line to search for
LINE="[from-internal-custom]"

    # Check if the line exists in the file
        if grep -qF "$LINE" "$FILE"; then
       echo "The line '$LINE' exists in the file '$FILE'."
    else
        echo "The line '$LINE' does not exist in the file '$FILE'. Adding the line."
       echo "$LINE" | sudo tee -a "$FILE"
    fi

sleep 1
fi
echo "INFO: SourceGuardian Files have Moved Sucsessfully"
sleep 1

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

#for create database
php artisan voipiran:db
#for create dummy data
php artisan voipiran:dummy

#If there is no `settings` table
php artisan migrate --seed
echo "INFO: Databases Created Sucssesfully"

####Make Directories and Permissions
#directory=/var/www/html/panel
#if [ ! -d "$directory" ]; then
#    yes | mkdir -p "$directory"

yes | mkdir -p /var/www/html/panel

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


####ُSET DNS
# Backup the original resolv.conf file
yes | cp /etc/resolv.conf /etc/resolv.conf.bak

# Set the DNS server IP addresses
echo "nameserver 10.202.10.202" > /etc/resolv.conf
echo "nameserver 178.22.122.100" >> /etc/resolv.conf

####Install Yarn
# Download Node.js binary package
#wget https://nodejs.org/dist/v16.5.0/node-v16.5.0-linux-x64.tar.xz
yes | wget -qO- https://rpm.nodesource.com/setup_16.5.0 | sudo -E bash -
yum -y install nodejs


###JUST RUN ON DEV ENV
####Install Yarn
yes | npm install -g yarn

# Check if the 'node' executable is available
if command -v node &> /dev/null; then
    echo "Node.js is installed on this system."
else
    echo "ERROR: Node.js is not installed on this system."
fi
# Check if the 'yarn' executable is available
if command -v yarn &> /dev/null; then
    echo "Yarn is installed on this system."
else
    echo "ERROR: Yarn is not installed on this system."
fi

# Restore the original resolv.conf file
yes | cp /etc/resolv.conf.bak /etc/resolv.conf


yarn
#yarn watch
export NODE_OPTIONS=--max-old-space-size=4096
yarn production


#############################INITIAL MODULES

chmod 777 /var/www/panel/app/Http/Controllers/Licence/survey.sh

#NumberFormater
echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "#include extensions_voipiran_numberformatter.conf" >> /etc/asterisk/extensions_custom.conf
yes | cp -rf $filesPath/irouting/extensions_voipiran_numberformatter.conf /etc/asterisk
chown -R asterisk:asterisk /etc/asterisk/extensions_voipiran_numberformatter.conf
chmod 777 /etc/asterisk/extensions_voipiran_numberformatter.conf

### Add from-pstn Context
echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "[from-pstn-custom]" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,1,Set(IS_PSTN_CALL=1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,NoOp(end-from-pstn)" >> /etc/asterisk/extensions_custom.conf

echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "[macro-hangupcall-custom]" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,1,NoOp(hangup-events)" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,n,Hangup()" >> /etc/asterisk/extensions_custom.conf


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

# Import data into the destination table
mysql -h localhost -u root -p$rootpw asterisk < $filesPath/survey/db/queues_config_data.sql > /dev/null 2>&1
mysql -h localhost -u root -p$rootpw asterisk < $filesPath/survey/db/queues_details_data.sql > /dev/null 2>&1

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

## Survey Extension Direct
#[macro-hangupcall-custom]
#exten => s,1,NoOp(Running custom hangup macro)
#same => n,ExecIf($["${IS_PSTN_CALL}"="1"]?AGI(your_survey_script.agi))
#same => n,Hangup()

### Fill visurvey.ini
echo "-------------Create ini File----------------"
echo dbuser = \"root\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbpass = \"$rootpw\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbaddress = \"localhost\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo dbname = \"visurvey\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo agentRole = \"karshenas\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo \#agentRole = \"operator\" >> /var/lib/asterisk/agi-bin/visurvey.ini
echo \#befarmaiidEnable = \"befarmaiservice asterisk reloadid\" >> /var/lib/asterisk/agi-bin/visurvey.ini

### Edit Asterisk Files
sed -i '/\[from\-internal\-custom\]/a include \=\> voipiran\-survey' /etc/asterisk/extensions_custom.conf
echo "" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-survey]" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4455,1,Wait(1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4455,n,AGI(visurvey.php)" >> /etc/asterisk/extensions_custom.conf

### Add Global Variable
echo "" >> /etc/asterisk/globals_custom.conf
echo "QAGI=viplayagentinfo.php" >> /etc/asterisk/globals_custom.conf

### Remove Folder

### Restart Services
systemctl reload asterisk
systemctl restart httpd


#############################iRouting
cd  /var/www/panel

### Copy Folders
yes | cp -rf $filesPath/irouting/vi-irouting.php /var/lib/asterisk/agi-bin
chmod 777 /var/lib/asterisk/agi-bin/vi-irouting.php

# Define the file path
new_line='exten => _.,n,AGI(vi-irouting.php)'
# Check if the line already exists
if ! grep -Fxq "$new_line" "$file_path"; then
    # Insert the new line before the line containing "End Codes"
    sed -i "/end-from-pstn/i $new_line" "/etc/asterisk/extensions_custom.conf"
    echo "iRouting: Line iRouting added to the file."
else
    echo "iRouting: Line iRouting already exists in the file."
fi

sed -i '/\[from\-internal\-custom\]/a include \=\> voipiran\-irouting\-misc' /etc/asterisk/extensions_custom.conf
echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-irouting-misc]" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,1,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,n,AGI(vi-irouting.php)" >> /etc/asterisk/extensions_custom.conf
echo "exten => 4456,n,Goto(from-internal-additional,4457,1)" >> /etc/asterisk/extensions_custom.conf

echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "[voipiran-irouting]" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,1,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,n,AGI(vi-irouting.php)" >> /etc/asterisk/extensions_custom.conf

### Create MiscDest
query="REPLACE INTO miscdests (id,description,destdial) VALUES('101','iRouting-misc','4456')"
mysql -hlocalhost -uroot -p$rootpw asterisk -e "$query"


#############################CallRequest
####Change Folder
cd /var/www/panel

####CopyFiles
yes | cp -rf $filesPath/callrequest/dialer /var/www/html/ > /dev/null
chown -R asterisk:asterisk /var/www/html/dialer

#Change DB Password
sed -i "s/123456/${rootpw}/g" /var/www/html/dialer/db.php


#############################AutoDial
yes | cd  /var/www/panel

rpm -U $filesPath/autodial/issabel-callcenter_4.0.0-4.noarch.rpm
yes | cp -f /opt/issabel/dialer/CampaignProcess.class.php /opt/issabel/dialer/CampaignProcess.class-000.php
yes | cp -rf $filesPath/autodial/CampaignProcess.class.php /opt/issabel/dialer
chmod 777 /opt/issabel/dialer/CampaignProcess.class.php


#############################IssabelMenu