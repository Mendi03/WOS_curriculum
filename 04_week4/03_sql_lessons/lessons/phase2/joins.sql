/*
1 All Jokes with Creators
List the setup and punchline of every joke, along with the name and email of the dad who created it.

2 Dads and Their Jokes (Including Jokeless Dads)
Retrieve the name of all dads, and if they have created any jokes, include the setup of their jokes. Make sure all dads are listed, even if they have no jokes.

3 Who Hasn't Joked Yet?
Find the name and age of all dads who have not created any jokes.

4 Jokes by Specific Age Group
List the setup and punchline of all jokes created by dads who are between 40 and 50 years old (inclusive). Include the dad's name and age in the results.

5 Delete a Joke's Creator
Identify a dad who has created a joke. Try to delete that dad. What happens if ON DELETE is RESTRICT? What happens if you change it to CASCADE and re-run the delete? (Describe your observations and the SQL you used).
*/
SELECT * FROM jokes;
#1

SELECT j.setup, j.punchline, d.name, d.email from jokes j inner JOIN dads d ON j.dad_id = d.id;

#2 

SELECT d.name, j.setup FROM dads d left JOIN jokes j ON d.id = j.dad_id;

#3

SELECT d.name, d.age FROM dads d left JOIN jokes j ON d.id = j.dad_id where j.id is NULL;

#4

SELECT j.setup, j.punchline, d.name, d.age from jokes j inner JOIN dads d ON j.dad_id = d.id where d.age between 40 AND 50;

#5 

select * from dads;

# the following script doesn't work because the dad with id 1 is being used as a foreign key in the jokes table. 
# This is because DELETE is RESTRICT. If DELETE is RESTRICT is changed to DELETE is CASCADE the dad is deleted along with the jokes that have that dad id as a foreign key.
delete from dads
where id = 1;

SELECT * from jokes;