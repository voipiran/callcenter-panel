#!/bin/bash

echo "Install VOIPIRAN iRouting"
echo "VOIPIRAN.io"
sleep 1
cd /var/www/panel

#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)



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

### Restart Services
systemctl reload asterisk
systemctl restart httpd
