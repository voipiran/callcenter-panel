## Setup

### Step 1: Download the repository as a ZIP file
```
wget https://github.com/voipiran/callcenter-panel/archive/refs/heads/main.zip -O /var/www/callcenter-panel.zip
```
### Step 2: Unzip the downloaded file, Set the necessary permissions
```
unzip /var/www/callcenter-panel.zip -d /var/www && sudo mkdir -p /var/www/panel && sudo shopt -s dotglob && sudo mv /var/www/callcenter-panel-main/* /var/www/panel && sudo shopt -u dotglob && sudo chown -R www-data:www-data /var/www/panel && sudo chmod -R 755 /var/www/panel
```

### Step 5: Run the install.sh script
```
cd /var/www/panel
./install.sh
```
