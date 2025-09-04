-- SECTION 3: SQL Querying - Basic Retrieval & Modification
#1 Insert
INSERT INTO users (username, email, password)
VALUES
	("Luffy", "op@gmail.com", "niku!"),
    ("Zoro", "onepiece@gmail.com", "notblind123"),
    ("Araragi", "bakemono@gmail.com", "shinobufan1"),
    ("Spike", "bebop@gmail.com", "iknowkungfu3"),
    ("Guts", "berserk@gmail.com", "grifith!!!"),
    ("Ai", "oshi@gmail.com", "aquaRuby2"),
    ("Kaguya", "loveiswar@gmail.com", "loveShinomiya"),
    ("Neo", "matrix@gmail.com", "trinity123");

INSERT INTO movies (title, genre, release_date, description, user_id)
VALUES
	("Matrix", "Science Fiction", "1999-03-31","Neo believes that Morpheus, an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix?", 8),
    ("Matrix Reloaded", "Science Fiction", "2003-05-15", "Freedom fighters Neo (Keanu Reeves), Trinity (Carrie-Anne Moss) and Morpheus (Laurence Fishburne) continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.", 8),
    ("Matrix Revolutions", "Science Fiction", "2003-10-27", "In a dystopia overrun by robots, Neo (Keanu Reeves), mankind's greatest hope, is trapped in a limbo world. Meanwhile, the majority of the planet's population remains in a state of suspended virtual reality.", 8),
    ("Kizumonogatari Part 1", "Action", "2016-01-08", "Araragi encounters a vampire and journeys back to humanity.", 3),
    ("Kizumonogatari Part 2", "Action", "2016-08-19", "Koyomi Araragi battles four dangerous vampire hunters to take back Kiss-shot's severed limbs.", 3),
    ("The Shawshank Redemption", "Drama", "1994-10-14", "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes.", 1),
    ("Good Will Hunting", "Drama", "1997-12-05", "Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential.", 2),
    ("Child's Play", "Horror", "1988-11-09", "Gunned down by Detective Mike Norris (Chris Sarandon), dying murderer Charles Lee Ray (Brad Dourif) uses black magic to put his soul inside a doll named Chucky -- which Karen Barclay (Catherine Hicks) then buys for her young son, Andy (Alex Vincent).", 5),
    ("12 Angry Men", "Drama", "1957-04-10", "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case.", 5),
    ("Nacho Libre", "Comedy", "2006-06-16", "Ignacio (Jack Black), or Nacho to his friends, works as a cook in the Mexican monastery where he grew up. The monastery is home to a host of orphans whom Nacho cares for deeply, but there is not much money to feed them properly. Nacho decides to raise money for the children by moonlighting as a Lucha Libre wrestler with his partner Esqueleto (Héctor Jiménez), but since the church forbids Lucha, Nacho must disguise his identity.", 4);

INSERT INTO ratings (user_id, movie_id, rating)
VALUES
	(1,2,4),
    (1,3,5),
    (1,5,2),
    (2,3,4),
    (3,6,3),
    (4,7,4),
    (6,1,5),
    (6,2,4),
    (2,2,1),
    (5,1,5),
    (5,2,1),
    (7,9,4);
    
# 2 SELECT
SELECT * FROM movies;

SELECT username, email FROM users;

SELECT title, genre FROM movies WHERE release_date < "1985-01-01";

SELECT username, email FROM users ORDER BY username LIMIT 5;

# 3 Update
UPDATE users SET email = "kingofpirates@gmail.com" WHERE id = 1;

UPDATE movies SET genre = "Action" WHERE id = 2;

#4 DELETE
DELETE FROM users WHERE id = 5;
DELETE FROM movies WHERE id = 7;

-- Section 4: SQL Querying - Aggregates & Grouping

SELECT COUNT(*) AS total_users FROM users;

SELECT MIN(release_date) AS newest_movie, MAX(release_date) AS oldest_movie FROM movies;

SELECT AVG(rating) AS avg_movie_rating FROM ratings;

SELECT genre, COUNT(genre) AS count_of_movies FROM movies GROUP BY genre;

SELECT genre, COUNT(genre) AS total_movies  FROM movies GROUP BY genre HAVING total_movies > 2;

SELECT user_id, COUNT(rating) AS total_ratings_given FROM ratings GROUP BY user_id;

-- Section 5: SQL Querying - Multi-Table Joins (INNER & LEFT) (3 Points)
SELECT u.username, m.title, m.genre 
FROM users u 
INNER JOIN movies m ON u.id = m.user_id;

SELECT u.username, m.title, m.genre 
FROM users u 
LEFT JOIN movies m ON u.id = m.user_id;

SELECT m.title, m.genre 
FROM movies m 
LEFT JOIN ratings r ON m.id = r.movie_id 
WHERE r.rating IS NULL;

-- Section 6: SQL Querying - Advanced Relational Analysis
SELECT m.title, m.genre, AVG(r.rating) as average_rating 
FROM movies m 
LEFT JOIN ratings r ON m.id = r.movie_id
GROUP BY m.id
ORDER BY average_rating DESC;

SELECT u.username, COUNT(r.rating) AS total_movies_reviewed 
FROM users u
LEFT JOIN ratings r ON u.id = r.user_id
GROUP BY u.id
ORDER BY total_movies_reviewed DESC;

