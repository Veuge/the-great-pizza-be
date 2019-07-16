create table pizza (
    id int AUTO_INCREMENT primary key,
    name varchar(500) not null,
    price decimal(10,2) not null
);

create table ingredient (
    id int AUTO_INCREMENT primary key,
    name varchar(500) not null
);

INSERT INTO pizza (price, name, menuId) VALUES (15.5, "Hawaiian", 1);
INSERT INTO pizza (price, name, menuId) VALUES (18.5, "Pepperoni", 1);
INSERT INTO pizza (price, name, menuId) VALUES (10.5, "Irish", 1);
INSERT INTO pizza (price, name, menuId) VALUES (18.5, "Meat", 1);
INSERT INTO ingredient (name) VALUES ("Cheese");
INSERT INTO ingredient (name) VALUES ("Ham");
INSERT INTO ingredient (name) VALUES ("Pineapple");
INSERT INTO ingredient (name) VALUES ("Pepperoni");
INSERT INTO ingredient (name) VALUES ("Potato");
INSERT INTO ingredient (name) VALUES ("Cabbage");
INSERT INTO ingredient (name) VALUES ("Bacon");
