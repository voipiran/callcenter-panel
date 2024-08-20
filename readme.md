## Setup

### Step 1: Download the repository as a ZIP file
```
wget https://github.com/voipiran/callcenter-panel/archive/refs/heads/main.zip -O /var/www/callcenter-panel.zip
```
### Step 2: Unzip the downloaded file, Set the necessary permissions
```
sudo mkdir -p /var/www/panel && unzip /var/www/callcenter-panel.zip -d /var/www/panel &&  sudo chmod -R 755 /var/www/panel
```

### Step 5: Run the install.sh script
```
cd /var/www/panel
./install.sh
```
