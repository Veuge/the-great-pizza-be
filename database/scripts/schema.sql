create table pizza (
    id int AUTO_INCREMENT primary key,
    name varchar(500) not null,
    price decimal(10,2) not null
);

create table ingredient (
    id int AUTO_INCREMENT primary key,
    name varchar(500) not null
);

create table pizza_ingredient (
    id int AUTO_INCREMENT primary key,
    pizzaId int not null,
    ingredientId int not null,
    foreign key (pizzaId) references pizza(id) on delete cascade,
    foreign key (ingredientId) references ingredient(id) on delete cascade
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
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,3);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,4);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,4);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,5);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,7);
