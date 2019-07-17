# The Great Pizza backend

Express project with mysql db for the great pizza UI.

### Database setup

## DB setup
1. Start a docker container
```bash
$ docker run -it --rm --net host -v /opt/data/mysql:/var/lib/mysql -e 'MYSQL_ROOT_PASSWORD=12345' -e 'MYSQL_DATABASE=pizza_db' -e 'MYSQL_USER=pizza' -e 'MYSQL_PASSWORD=pizza' mysql:5.7
```
2. Start a CLI for mysql
```bash
$ mycli -u root
```

3. Create the basic tables
```sql
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
```

### To run this backend project:
1. Install the dependencies
```bash
$ npm i
```
2. Start the server
```bash
$ npm start
```

### Dependencies

This project uses the following dependencies
- babel-cli
- babel-preset-es2015
- express
- mysql
- nodemon (as dev dependency)