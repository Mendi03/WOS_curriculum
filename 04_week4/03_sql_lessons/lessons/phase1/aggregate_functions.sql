/*

Exercise 1: Dad Count
How many total dads are in The Dad-Joke Dadabase?

Exercise 2: Age Statistics
What is the youngest age, oldest age, and average age of all dads? (Display all three in a single query result).

Exercise 3: Popular Ages
List each unique age present in the dads table and the number of dads at that age. Order the results by the number of dads in descending order.

Exercise 4: Active Age Groups
Find ages where there are exactly 2 dads.

Exercise 5: Elder Statemen (or Women)
List each unique age and the average age within that group, but only for ages where the average age is 50 or greater. Order the results by age in ascending order.

*/

SELECT * FROM dads;

# 1
SELECT COUNT(*) FROM dads;

#2

SELECT MIN(age), AVG(age), MAX(age) FROM dads;

#3 

SELECT age, COUNT(*) AS num_dads from dads GROUP BY age ORDER BY num_dads DESC;

#4

SELECT age from dads GROUP BY age HAVING count(*) = 2;

#5

SELECT age, AVG(age) AS average_age_in_group
FROM dads
GROUP BY age
HAVING AVG(age) > 50;