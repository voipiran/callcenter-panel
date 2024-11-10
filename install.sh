#!/bin/bash


echo "Install VOIPIRAN CallCenter Panel"
echo "VOIPIRAN.io"
echo "VOIPIRAN Panel 1.0"
sleep 1

####Install Yarn and node.js
## Download Node.js binary package
#wget https://nodejs.org/dist/v16.5.0/node-v16.5.0-linux-x64.tar.xz
tar -xf node-v16.5.0-linux-x64.tar.xz
sudo mv node-v16.5.0-linux-x64 /usr/local/
sudo ln -s /usr/local/node-v16.5.0-linux-x64/bin/node /usr/bin/node
sudo ln -sf /usr/local/node-v16.5.0-linux-x64/bin/npm /usr/bin/npm
#yes | wget -qO- https://rpm.nodesource.com/setup_16.5.0 | sudo -E bash -
#yum -y install nodejs

####Install Yarn
#yes | npm install -g yarn
#curl -o- -L https://yarnpkg.com/install.sh | bash
#yes |  dnf localinstall installation/yarn-1.22.19-1.noarch.rpm
#yes |  dnf --disablerepo="*" localinstall installation/yarn-1.22.19-1.noarch.rpm
yes | tar -xzf yarn-v1.22.19.tar.gz
export PATH="$PATH:/usr/bin"
yes |  mv yarn-v1.22.19 /opt/yarn
yes |  ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn
yes |  ln -s /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg


# Check if the 'node' executable is available
# Check if the 'node' executable is available
if command -v node &> /dev/null; then
    echo "Node.js is installed on this system."
else
    echo "ERROR: Node.js is not installed on this system."
    exit 1
fi

# Check if the 'yarn' executable is available
if command -v yarn &> /dev/null; then
    echo "Yarn is installed on this system."
else
    echo "ERROR: Yarn is not installed on this system."
    exit 1
fi


# Set the DNS server IP addresses
#echo "nameserver 10.202.10.202" > /etc/resolv.conf
#echo "nameserver 178.22.122.100" >> /etc/resolv.conf
# Restore the original resolv.conf file
#yes | cp /etc/resolv.conf.bak /etc/resolv.conf
####ُSET DNS
# Backup the original resolv.conf file
#yes | cp /etc/resolv.conf /etc/resolv.conf.bak

####Make Directories and Permissions
#directory="/var/www/panel"
#if [ ! -d "$directory" ]; then
#    yes | mkdir -p "$directory"


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
yes | cp -rf $filesPath/sourceguardian/ixed.5.4.lin /usr/lib64/php/modules
yes | cp -rf $filesPath/sourceguardian/ixed.5.4ts.lin /usr/lib64/php/modules
yes | cp -rf /etc/php.ini /etc/php-old.ini
yes | cp -rf $filesPath/sourceguardian/php5.ini /etc/php.ini
echo "SourceGuardian Files have Moved Sucsessfully"
sleep 1
else
    echo "PHP 7 (or newer) detected. Performing action B."

echo "Install sourceguardian Files"
echo "------------Copy SourceGaurd-----------------"
yes | cp -rf $filesPath/sourceguardian/ixed.7.4.lin /usr/lib64/php/modules
yes | cp -rf /etc/php.ini /etc/php-old.ini
yes | cp -rf $filesPath/sourceguardian/php7.ini /etc/php.ini
echo "SourceGuardian Files have Moved Sucsessfully"
systemctl reload php-fpm  > /dev/null

####Add from-internal-custom
# File to check, There is no from-internal-custom on Issabel5
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
#Get Root Password
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

# Movie installSH
cd /var/www/panel
yes | cp -rf installSH /var/www/html/panel
chmod -R 777 /var/www/html/panel/installSH

#For Stats SH
chmod 666 /etc/odbc.ini


####
cd /var/www/panel
php artisan cache:clear
yes | composer dump-autoload

####Add to issabel-htaccess
echo '<Directory "/var/www/html/panel">' >> /etc/httpd/conf.d/issabel-htaccess.conf
echo 'AllowOverride All' >> /etc/httpd/conf.d/issabel-htaccess.conf
echo '</Directory>' >> /etc/httpd/conf.d/issabel-htaccess.conf



####Comment for Devlopment
yes | cp -rf /var/www/panel/installation/js/chunks/*  /var/www/html/panel/js/chunks &> /dev/null
yes | cp -rf /var/www/panel/installation/js/css/*  /var/www/html/panel/css &> /dev/null
yes | cp -rf /var/www/panel/installation/js/login.js /var/www/html/panel/js &> /dev/null
yes | cp -rf /var/www/panel/installation/js/main.js /var/www/html/panel/js


####Uncomment for Devlopment
#yarn
#yarn watch



#############################INITIAL MODULES
chmod -R 777 /var/www/panel/app/Http/Controllers/Licence
chmod -R 777 /var/www/panel/installSH


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
echo "[to-ccpanel]" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,1,Set(IS_PSTN_CALL=1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,NoOp(start-from-pstn)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,Gosub(numberformatter,s,1)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _.,n,NoOp(end-from-pstn)" >> /etc/asterisk/extensions_custom.conf
echo "exten => _X.,n,Goto(ext-did,${EXTEN},1)" >> /etc/asterisk/extensions_custom.conf


echo "" >> /etc/asterisk/extensions_custom.conf
echo ";;VOIPIRAN.io" >> /etc/asterisk/extensions_custom.conf
echo "[macro-hangupcall-custom]" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,1,NoOp(hangup-events)" >> /etc/asterisk/extensions_custom.conf
echo "exten => s,n,Hangup()" >> /etc/asterisk/extensions_custom.conf


###To set permission running amporal
#echo "asterisk ALL=(ALL) NOPASSWD: /var/www/html/admin/modules/framework/amp_conf/sbin/amportal" | sudo tee -a /etc/sudoers


### Restart Services
systemctl reload asterisk
systemctl reload httpd


#############################IssabelMenu
cd /var/www/panel
issabel-menumerge $filesPath/menu.xml