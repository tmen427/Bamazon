DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;



CREATE TABLE products (
    item_id INT auto_increment NOT NULL,
    product_name VARCHAR (100) NULL, 
    department_name VARCHAR(100) NULL, 
    price DECIMAL(10,2) NULL, 
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fender Strat', 'Guitar', 1500, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Les Pauls', 'Guitar', 2000, 10); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Gibson', 'Guitar', 800, 3); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Honda Civic', 'Car', 20000, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Nissan GTR', 'Car', 90000, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('BMW M3', 'Car', 60000, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Jeep Wrangler', 'Car', 25000, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ford Mustang', 'Car', 27000, 10); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Paul Reed', 'Guitar', 1200, 5); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Toyota Camry', 'Car', 20000, 20); 
SELECT * FROM products 