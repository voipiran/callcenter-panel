[👈back](../readme.md)

# Voipiran Call Stats Developer Version
voipiran call center stats

## manage language And Setting
- If there is no `settings` table, use the following command
```
$ php artisan migrate
```

## change content page about me
- path file en is `/resource/lang/en/aboutMe.php`  // for english language
- path file fa is `/resource/lang/fa/aboutMe.php`  // for farsi language
 ```
   after change content please run below command
   $ php artisan cache:clear
   $ php artisan config:clear
 ```
 
## Setup Qpanel service python!
```
$ cd /etc/systemd/system
$ nano qpanel.service
$ past the below content
   [Unit]
   Description=Qpanel
   After=network.target

   [Service]
   Type=simple
   ExecStart=/usr/bin/python app.py
   Restart=always
   # Consider creating a dedicated user for Wiki.js here:
   User=asterisk
   WorkingDirectory=/var/www/html/qpanel

   [Install]
   WantedBy=multi-user.target
```
> Becarefull  
> Check the `python --version` if it's 2.x.x you need version 3, try `python3 --version` and replace the `python3 app.py` insted `python app.py` in the top content.

```
$ systemctl start qpanel.service
$ systemctl enabel qpanel.service
```

It's done, you should see the qpanel on `serverip:5000` and it will reload on server boot.

## for development
```
$ sudo yum install nodejs // if node not installed
$ yarn
$ yarn watch
$ if work on server please change webpack.mix (default for local)

```