CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Lamp', 'Home', 18, 48);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pot', 'Kitchen', 35, 82);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('iPod', 'Electronics', 100, 27);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Jerky', 'Food', 2.99, 228);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pants', 'Clothing', 110, 56);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pizza', 'Food', 4.99, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Socks', 'Clothing', 6.50, 89);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Desk', 'Home', 225, 54);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Apple Watch', 'Electronics', 320.50, 72);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Bamazon Alexa', 'Electronics', 299.99, 1023);


SELECT * FROM products;
