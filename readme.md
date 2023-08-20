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

$ php artisan migrate // If there is no `settings` table

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

