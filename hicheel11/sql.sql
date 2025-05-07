-- Active: 1743745029762@@127.0.0.1@3306@hi

CREATE DATABASE hi;
USE hi;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(100), lastname VARCHAR(100), age INT, country VARCHAR(100));
INSERT INTO users (id,firstname,lastname,age,country)
VALUES (1,'jojo','jobro',21,'italy'),
(2,'sdjs','asjkdhj',54, 'oasdj');
SELECT * FROM users;