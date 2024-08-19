# Voipiran Base Structure Development Version
Voipiran Base

## Setup
```
# Step 1: Download the repository as a ZIP file
wget https://github.com/voipiran/callcenter-panel/archive/refs/heads/main.zip -O callcenter-panel.zip

# Step 2: Unzip the downloaded file
unzip callcenter-panel.zip

# Step 3: Move the files to /var/www/panel
sudo mkdir -p /var/www/panel
sudo mv callcenter-panel-main/* /var/www/panel

# Step 4: Set the necessary permissions
sudo chown -R www-data:www-data /var/www/panel
sudo chmod -R 755 /var/www/panel

# Step 5: Run the install.sh script
sudo /var/www/panel/install.sh

```
