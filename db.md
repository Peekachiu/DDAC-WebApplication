sudo apt-get update
sudo apt-get install -y mysql-client

mysql -h ddac-vpc-db.cfgwoi0mswsk.ap-southeast-1.rds.amazonaws.com -u ddacadmin -p DDAC_DB < residentproDB.sql

mysql -h ddac-vpc-db.cfgwoi0mswsk.ap-southeast-1.rds.amazonaws.com -u ddacadmin -p DDAC_DB -e "SHOW TABLES;"