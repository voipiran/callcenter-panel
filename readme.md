# Voipiran Base Structure Development Version
Voipiran Base

## Setup
```
$ cd /var/www
$ mkdir panel //ignore ig panel dir exists
$ cd panel
$ add your ssh key to authorized_ssh in ~/.ssh
$ git clone git@github.com:codetrend104/voipiran-base-dev.git panel
$ cd panel
$ cp .env.example .env
$ composer install // install the composer if is not installed

- login in mariaDb with below command to created database voipiran
$ run command : mysql -u root -p // and then type password
$ run command : CREATE DATABASE IF NOT EXISTS voipiran;

- for create all database and make dummy data please run bellow command
$ php artisan voipiran:db // for create database irouting,number-formatter and etc
$ php artisan voipiran:dummy //for create dummy data

$ php artisan migrate --seed // If there is no `settings` table

- alter table survey
$ add feild `survey_route varchar 20` to table `survey`

$ mkdir /var/www/html // ignore if /html exists
$ mkdir /var/www/html/panel
$ cd  /var/www/panel/public 
$ mv ./.[!.]* /var/www/html/panel
$ cd ..
$ rm -rf public 
$ chmod -R 777 storage

- cd /var/www/html/panel and run below command access to get Recorded sounds
$ ln -s /var/spool/asterisk/monitor monitor

- cd /var/www/html/panel
$ ln -s /var/www/panel/storage/app storage
$ ln -s /var/spool/asterisk/monitor customerVoices
$ for change 'about me' please open path /var/www/panel/resources/lang/en/aboutMe.php and /var/www/panel/resources/lang/fa/aboutMe.php
$ php artisan cache:clear
$ composer dump-autoload
$ nano /etc/httpd/conf.d/issabel-htaccess.conf 
   // add folowing command top of the issabel-htaccess.conf  file
   <Directory "/var/www/html/panel">
        AllowOverride All
   </Directory>
$ systemctl restart httpd
$ install node 16 and yarn
$ go to `/www/var/www/panel`
$ yarn
$ yarn watch
$ done

## Production
- go to `/var/www/panel`
- `yarn production`

```

### Add New APP 
>Becarefull  
>All this steps are sensitive  
>Do this step when you are all focuced!  

- in this files 
    - `resources\assets\js\route\route.js`

    - for show new section in main menu
    - `resources\assets\js\app.js` 
    - open `resources\assets\js\I18_localization\fa_i18.js` and and menu title in section GENERAL.SideMenu
      
    - `route.php`

    - add permission in file `DatabaseSeeder`

# sample Licence

        "survey": `VOIPIRAN_08ACd92gBa54w3S2h5K1fCzhIlGXl87MmHnitF583RWE5UQe0X9iBReFv5FIf9fG50o9efc83Gne4cn6jgTj4SJ5d1uvj5y8IoG2ZIh244SoU3Kxbl492eT4P6lou28YI725P4CB7875DiXg1kfWFrm6TRONl4giSbyM76TGkX26bJiXO5G5r6L7Fx9203e`,

        "call_stat_plus": `VOIPIRAN_Q61u7Uyw3cVQ5NFsX1OLNb270Oe61Cz0an82MH2ERd88534CTUK93m3VH3YC4rmb217vV583eIY8ekBehvBk70Bs7VRzJ7VI86246C9uc36qq35T4o7b6634rLE84GcRsyl92VsTLdk1I11mAcO6JPGC6S46W9IGpy3UYdqUL4GO4UkOqr0Mudi2H3X9h4M`,


        "irouting": `VOIPIRAN_79a47R7q0sAI8s20jLc7uAX5o7G4O41TAHINUq0wHN78y6AXo6Ziqqjmz5shC65X97wj0LdWOE81wBMg8AXN35544LLLR7hc63s9PWvTRZ0sHYC45yRWQ5yy1Nsh868NB43y3q17f2U7cL5Asr5J5h755aDa4nD3PY4800758fN8F155s5n0vq8yIt1PDLT`,

        "callrequest": `VOIPIRAN_Me60jrQPRq074TAU9jIS1L6f36q7yRG6q2764Cd520lHC583pHR4Z2KMaKl3110PGl6elM6afC4547qaH2ZlRr60ojOW7Du3JhkSu8I75DfKbGX76eM6t932GYR3D8orsoPA7W1I9m0UiE1F8DvZ02a78XCJCkU42mUT14PM5e6SzL03AoI6Z0fmJ7Ee5E9`,


        "webphone": `VOIPIRAN_W764Gw37cG13tCP9x2057OCVGbB3S630l748d7OZ0KzPG7jz3htyX02C77xli8P5T44CbiCx5sYW546979f3eyy378no30xyJ3v5m6s1W14MF0S2Uf536J9y7C1sdl2K419wr484G79X401104B3cbqG87X91hP2p4C794nwIlUcVfd96s3RL8WMyxIWJ6z`,
