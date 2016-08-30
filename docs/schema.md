# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
location        | string    | not null
about           | text      | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## loans
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references entrepreneurs), indexed
title            | string    | not null
description      | string    | not null
amount           | integer   | not null
status           | integer   | not null, *1
end_date         | datetime  | not null
length           | integer   | not null, *3
repayment_period | integer   | not null, *2

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
loan_id     | integer   | not null, foreign key (references loans), indexed
user_id     | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null

* 1 status is an enum, values: [ :unfilled, :awaiting_disbursment, :in_repayment, :fully_repayed, :delinquent, :defaulted ]
* 2 repayment_period, measured in days between payments, eg 14 = 1 payment / 2 weeks
* 3 length, measured in days from disbursment until the loan is to be repayed and contributions returned