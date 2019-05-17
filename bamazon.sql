DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Les Paul", "Intruments", 2000);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Fender Stratocaster", "Intruments", 1000);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Holographic Charizard", "Collectibles", 500);




