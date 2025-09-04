USE dadabase_phase_one_db;

SELECT 
    *
FROM
    dads;

# 1. Retrieve the name and email of all dads who are younger than 40 years old.

SELECT 
    *
FROM
    dads
WHERE
    age < 40;

# 2. Find the name and email of all dads whose email addresses contain '.com' and are NOT named 'David Goldstein'.
select * from dads where email LIKE "%.com" AND name != "David Goldstein";

# 3. List all dads' name and age, sorted alphabetically by name. Then, get only the first 3 results.
SELECT name, age FROM dads ORDER BY name LIMIT 3;

# 4. Find the name and age of dads whose age is between 45 and 55 (inclusive), and order them from oldest to youngest.
SELECT name, age FROM dads WHERE age BETWEEN 45 AND 55 ORDER BY age DESC;

# 5. Retrieve the names of the 2 oldest dads in your database.

SELECT name FROM dads ORDER BY age DESC LIMIT 2;