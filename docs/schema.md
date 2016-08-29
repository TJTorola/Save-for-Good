# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## entrepreneurs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
location    | string    | not null
about       | text      | not null

## loans
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
entrepreneur_id  | integer   | not null, foreign key (references entrepreneurs), indexed
title            | string    | not null
description      | string    | not null
amount           | integer   | not null
status           | string    | not null
end_date         | datetime  | not null
length           | integer   | not null
repayment_period | integer   | not null
risk             | integer   | not null

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
loan_id     | integer   | not null, foreign key (references loans), indexed
user_id     | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null