<br>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/RyderAsKing/QRTicketify/refs/heads/main/logo/White.png">
    <img alt="QR Ticketify logo" src="https://raw.githubusercontent.com/RyderAsKing/QRTicketify/refs/heads/main/logo/Black.png" width="40%">
  </picture>
  <br> <br>
    
  ![GitHub Workflow Status](https://img.shields.io/github/check-runs/ryderasking/qrticketify/main)
  ![GitHub License](https://img.shields.io/github/license/ryderasking/qrticketify)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/ryderasking/qrticketify)
  ![GitHub last commit](https://img.shields.io/github/last-commit/ryderasking/qrticketify)
</div>

<br>

# QRTicketify

QRTicketify is a free, open-source Laravel project that allows admins to create events and send tickets to users via email. These tickets can be verified through the system (POS) when needed. It features a React JS-based frontend for an interactive user experience.

## QRTicketify Installation Guide (Laravel 11)

The following installation steps are for Ubuntu OS only.

## Dependencies

### APT Update

```bash
sudo apt-get update && sudo apt-get -y upgrade
```

### Install Curl

```bash
sudo apt-get -y install curl
```

### Install Necessary Tools

```bash
sudo apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

### Add Ondřej Surý PPA repository for PHP

```bash
sudo add-apt-repository -y ppa:ondrej/php
```

### Add Chris-lea Redis Server repository

```bash
sudo add-apt-repository -y ppa:chris-lea/redis-server
```

### Download MariaDB setup and install it

```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

### Install Dependencies (Updated for PHP 8.2, Laravel 11)

```bash
sudo apt -y install php8.2 php8.2-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server npm
```

### Install Composer

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Downloading Project Files

### Create a directory for the project

```bash
sudo mkdir -p /var/www/qrticketify
cd /var/www/qrticketify
```

### Clone the QRTicketify repository

```bash
sudo git clone https://github.com/RyderAsKing/QRTicketify.git ./
```

### Set permissions

```bash
sudo chmod -R 755 storage/* bootstrap/cache/
```

## Storage Setup, Key Setup, and Package Installation

### Copy .env file

```bash
cp .env.example .env
```

### Install Composer dependencies

```bash
composer install --no-dev --optimize-autoloader
```

### Install NPM dependencies

```bash
npm install express express-ws ws axios
```

### Generate Application Key

```bash
php artisan key:generate --force
```

### Create a symbolic link for storage

```bash
php artisan storage:link
```

## Database Setup

### Login as root in MySQL

```bash
sudo mysql -u root -p
```

### Create the database and user

```sql
CREATE DATABASE qrticketify;
CREATE USER 'qrticketify'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON qrticketify.* TO 'qrticketify'@'127.0.0.1';
FLUSH PRIVILEGES;
```

## Configuration

### Edit the .env file

```bash
sudo nano .env
```

Example `.env` variables:

```env
APP_NAME=QRTicketify
APP_URL="http://yourdomain.com"

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=qrticketify
DB_USERNAME=qrticketify
DB_PASSWORD=USE_YOUR_OWN_PASSWORD
```

### Email Configuration (optional)

Update the following values in `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.your_email_provider.com
MAIL_PORT=587
MAIL_USERNAME=your_email_username
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=example@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Running Migrations and Setting Up Permissions

### Run migrations and seed the database

```bash
php artisan migrate --seed --force
```

### Set correct ownership

```bash
sudo chown -R www-data:www-data /var/www/qrticketify
```

## NGINX Configuration

### Create an NGINX config file

```bash
sudo nano /etc/nginx/sites-available/qrticketify.conf
```

### Paste the following configuration

```nginx
server {
    listen 80;
    root /var/www/qrticketify/public;
    index index.php index.html index.htm index.nginx-debian.html;
    server_name yourdomain.com; # Change this

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### Enable the NGINX config

```bash
sudo ln -s /etc/nginx/sites-available/qrticketify.conf /etc/nginx/sites-enabled/qrticketify.conf
```

### Check for NGINX errors

```bash
sudo nginx -t
```

### Restart NGINX

```bash
sudo systemctl restart nginx
```

## SSL (Optional but Recommended)

### Install Certbot and setup SSL

```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Worker Setup

### Create a supervisor configuration for Laravel Queue workers

```bash
sudo nano /etc/supervisor/conf.d/qrticketify-worker.conf
```

### Add the following configuration

```ini
[program:qrticketify-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/qrticketify/artisan queue:work --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/qrticketify/worker.log
```

### Reread the configuration and start the worker

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start qrticketify-worker:*
```

## Finishing Up

### Enable Maintenance Mode

```bash
sudo php artisan down
```

### Update the project

```bash
sudo git stash
sudo git pull
sudo chmod -R 755 /var/www/qrticketify
```

### Run database migrations

```bash
sudo php artisan migrate --seed --force
```

### Clear Cache

```bash
sudo php artisan view:clear
sudo php artisan config:clear
```

### Update dependencies

```bash
sudo composer install --no-dev --optimize-autoloader
npm install express express-ws ws axios
```

### Update Permissions

```bash
sudo chown -R www-data:www-data /var/www/qrticketify
```

### Restart Queue Workers

```bash
sudo php artisan queue:restart
```

### Disable Maintenance Mode

```bash
sudo php artisan up
```

## Debugging

To check the logs, use the following command to get the last 100 entries:

```bash
tail -n 100 /var/www/qrticketify/storage/logs/laravel.log | nc termbin.com 9999
```

---
