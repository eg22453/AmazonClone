DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Les Paul", "instruments", 2000, 10);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Iphone", "electronics", 1000, 100);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Avengers: Age of Ultron", "movies", 10, 500);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("John Wick", "movies", 9, 300);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Fender Stratocaster", "instruments", 1500, 80);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Red Bull", "food/drink", 3, 1000);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Slim Jims", "food/drink", 1, 300);

INSERT INTO products (product_name, department_name, price,  stock_quantity)
VALUES ("Tame Impala Discography", "music", 35, 43);

