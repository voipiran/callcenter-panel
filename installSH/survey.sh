#!/bin/bash

echo "Install VOIPIRAN Survey"
echo "VOIPIRAN.io"
sleep 1

cd /var/www/panel
#############################Initial

filesPath=voipiran
####Fetch DB root PASSWORD
rootpw=$(sed -ne 's/.*mysqlrootpwd=//gp' /etc/issabel.conf)



#############################Survey
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
