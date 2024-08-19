#!/bin/bash

echo "Install VOIPIRAN Webphone"
echo "VOIPIRAN.io"
sleep 1
cd /var/www/panel

#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)




### Restart Services
systemctl reload asterisk
systemctl restart httpd
