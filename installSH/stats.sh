#!/bin/bash

echo "Install VOIPIRAN Stats"
echo "VOIPIRAN.io"
sleep 1
cd /var/www/panel

#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)


#############################CallStats

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

### Restart Services
systemctl reload asterisk

