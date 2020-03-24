ng build --prod
cp .htaccess dist/GSBAngular
sudo rm -rf /var/www/html/GSBAngular
sudo cp -r dist/GSBAngular /var/www/html
