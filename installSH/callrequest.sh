#!/bin/bash

echo "Install VOIPIRAN CallRequest"
echo "VOIPIRAN.io"
sleep 1
cd /var/www/panel

#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)



#############################CallRequest
####Change Folder
cd /var/www/panel

####CopyFiles
yes | cp -rf $filesPath/callrequest/dialer /var/www/html/ > /dev/null
chown -R asterisk:asterisk /var/www/html/dialer

#Change DB Password
sed -i "s/123456/${rootpw}/g" /var/www/html/dialer/db.php

### Restart Services
systemctl reload asterisk
systemctl restart httpd
