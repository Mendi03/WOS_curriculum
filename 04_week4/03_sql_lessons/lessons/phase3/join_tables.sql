/*
1 Dad Eyeroll Details
List the name of every dad who has given an eyeroll, along with the setup and punchline of the jokes they eyerolled.

2 Jokes and Their Eyerollers
For each joke, list its setup and punchline, and the name of any dad who eyerolled it. Include all jokes, even those that haven't received any eyerolls.

3 Dads Who Have Not Eyerolled Any Jokes
Find the name and email of all dads who have not given any eyerolls to any jokes.

4 Most Eyerolled Jokes
Count how many eyerolls each joke has received. List the setup of the joke and the total_eyerolls count. Order the results by total_eyerolls in descending order.

5 Dads Who Eyerolled the Most
Count how many jokes each dad has eyerolled. List the dad_name and the total_eyerolled_jokes. Order the results by total_eyerolled_jokes in descending order.
*/

select * from eyerolls;

#1

select d.name, j.setup, j.punchline from dads d inner Join eyerolls e ON d.id = e.dad_id
INNER JOIN jokes j ON j.id = e.joke_id;

#2 

select j.setup, j.punchline, d.name as dad_name from jokes j left Join eyerolls e ON j.id = e.joke_id
left JOIN dads d ON d.id = e.dad_id;

#3

select * from eyerolls;

select d.name, d.email from dads d left join eyerolls e ON d.id = e.dad_id where e.dad_id is NULL;

#4

SELECT j.setup, COUNT(e.joke_id) AS total_eyerolls
FROM jokes j
LEFT JOIN eyerolls e ON j.id = e.joke_id
GROUP BY j.id
ORDER BY total_eyerolls DESC;

#5

SELECT d.name, COUNT(e.dad_id) AS total_eyerolled_jokes
FROM dads d
LEFT JOIN eyerolls e ON d.id = e.dad_id
GROUP BY d.id
ORDER BY total_eyerolled_jokes DESC;