CREATE DATABASE questionbank;

CREATE TABLE questionbank(
    question_id SERIAL PRIMARY KEY,
    questions VARCHAR(255)
);

CREATE DATABASE multipleoptions;

CREATE TABLE multipleoptions (
 option_id serial PRIMARY KEY,
 option_1 VARCHAR ( 255),
 option_2 VARCHAR ( 255),
 option_3 VARCHAR ( 255),
 option_4 VARCHAR ( 255)
);
