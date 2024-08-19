#!/bin/bash

echo "Install VOIPIRAN AutoDialer"
echo "VOIPIRAN.io"
sleep 1
cd /var/www/panel

#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)


#############################AutoDial
yes | cd  /var/www/panel

rpm -U $filesPath/autodial/issabel-callcenter_4.0.0-4.noarch.rpm
yes | cp -f /opt/issabel/dialer/CampaignProcess.class.php /opt/issabel/dialer/CampaignProcess.class-000.php
yes | cp -rf $filesPath/autodial/CampaignProcess.class.php /opt/issabel/dialer
chmod 777 /opt/issabel/dialer/CampaignProcess.class.php


### Remove Folder

### Restart Services
systemctl reload asterisk
systemctl restart httpd
