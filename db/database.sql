CREATE DATABASE users;

CREATE TABLE user(
    user_id serial primary key,
    first_name text,
    last_name text,
    username text,
    email text,
    password text
);