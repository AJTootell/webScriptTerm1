create database if not exists cardb;

create table if not exists cardb.car (
  reg varchar(8) primary key,
  make varchar(30),
  model varchar(30),
  year int,
  price float
);
