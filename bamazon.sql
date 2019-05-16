DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE auctionitems (
  id INT NOT NULL AUTO_INCREMENT,
  itemname VARCHAR(45) NULL,
  category DECIMAL(10,2) NULL,
  bidprice INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Les Paul", "Intruments", 2000);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Fender Stratocaster", "Intruments", 1000);

INSERT INTO auctionitems (itemname, category, bidprice)
VALUES ("Holographic Charizard", "Collectibles", 500);




