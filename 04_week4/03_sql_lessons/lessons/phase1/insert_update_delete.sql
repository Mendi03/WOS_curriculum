/* 
Exercise 1: Add a New Dad
Add a new dad named "Barry Jokes" who is 62 years old, with the email "barry.j@jokes.com".

Exercise 2: Update Dad's Age
Locate "Omar Khan" and update his age to 49.

Exercise 3: Remove a Dad
Delete the dad named "Kevin Peterson" from the database.
*/
USE `dadabase_phase_one_db`;
select * from dads;

#1

INSERT INTO dads (name, age, email, password)
VALUES ("Barry Jokes", 62, "barry.j@jokes.com", "idkMaybeThis?");

#2

SET SQL_SAFE_UPDATES = 0;

UPDATE dads 
SET age = 49 
where name = "Omar Khan";

SET SQL_SAFE_UPDATES = 1;

#3

SET SQL_SAFE_UPDATES = 0;
DELETE FROM dads where name = "Kevin Peterson";
SET SQL_SAFE_UPDATES = 1;