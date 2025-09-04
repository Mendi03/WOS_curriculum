-- Section 3: SQL Querying - Basic Retrieval & Modification

# Add at least 5 users to your users table.
INSERT INTO users (username, email, password)
VALUES 
	("Kratos", "boi@gmail.com", "notGOW"),
	("Jak", "naughtydog@gmail.com", "mar123"),
    ("Sly", "thevieus@gmail.com", "carmelita20"),
    ("Snake", "bigboss@gmail.com", "otacon123"),
    ("Mario", "peachfan@gmail.com", "luigi123"),
    ("Luffy", "onepiece@outlook.com", "niku!");
    
INSERT INTO users (username, email, password)
VALUES ("Luffy", "onepiece@outlook.com", "niku!");
    
# Add at least 7 cars to your cars table. 
INSERT INTO cars (year, make, model, url, user_id)
VALUES 
	(1980, "Ford", "Mustang", "http://www.example.com/image.jpg", 1),
    (2018, "Chevrolet", "Silverado", "http://www.example.com/image.jpg", 2),
    (1999, "Honda", "Civic", "http://www.example.com/image.jpg", 5),
    (2020, "Ford", "Bronco", "http://www.example.com/image.jpg", 3),
    (2015, "Toyota", "Corolla", "http://www.example.com/image.jpg", 4),
    (2000, "BMW", "Coupe", "http://www.example.com/image.jpg", 1),
    (2025, "Ford", "Bronco", "http://www.example.com/image.jpg", 5),
    (2022, "Ford", "Mustang", "http://www.example.com/image.jpg", 5),
    (2005, "Ferrari", "Spider", "http://www.example.com/image.jpg", 1);
    
INSERT INTO cars (year, make, model, url, user_id)
VALUES (2022, "Ford", "Mustang", "http://www.example.com/image.jpg", 5);
    
# Add at least 10 ratings
INSERT INTO ratings (user_id, car_id, rating)
VALUES
	(2,1,5),
    (1,3,1),
    (1,4,1),
    (3,5,2),
    (4,6,3),
    (2,2,3),
    (5,2,4),
    (5,5,4),
    (5,6,1),
    (2,7,2);
    
# 2 SELECT

SELECT * FROM cars;

SELECT username, email FROM users;

SELECT make, model FROM cars where year < 2010;

SELECT username, email FROM users ORDER BY username LIMIT 5;

# 3 UPDATE

UPDATE users SET email = "delfino@gmail.com" WHERE id = 5;

UPDATE cars SET year = 1979 WHERE id = 1;

# DELETE

DELETE FROM users WHERE id = 3;

DELETE FROM cars WHERE id = 7;

-- SECTION 4: SQL Querying - Aggregates & Grouping 
SELECT COUNT(*) AS total_users FROM users;

SELECT MIN(year) AS newest_car, MAX(year) AS oldest_car FROM cars;

SELECT AVG(rating) AS avg_car_rating FROM ratings;

SELECT make, COUNT(make) AS count_of_cars FROM cars GROUP BY make;

SELECT make, COUNT(make) AS total_cars  FROM cars GROUP BY make HAVING total_cars > 2;

SELECT user_id, COUNT(rating) FROM ratings GROUP BY user_id;

-- Section 5: SQL Querying - Multi-Table Joins (INNER & LEFT)

SELECT u.username, c.make, c.model 
FROM users u 
INNER JOIN cars c ON u.id = c.user_id;

SELECT u.username, c.make, c.model 
FROM users u 
LEFT JOIN cars c ON u.id = c.user_id;

SELECT c.make, c.model 
FROM cars c 
LEFT JOIN ratings r ON c.id = r.car_id 
WHERE r.rating IS NULL;

-- Section 6: SQL Querying - Advanced Relational Analysis
SELECT c.make, c.model, AVG(r.rating) as average_rating 
FROM cars c 
LEFT JOIN ratings r ON c.id = r.car_id
GROUP BY c.id
ORDER BY average_rating DESC;

SELECT u.username, COUNT(r.rating) AS total_ratings_given 
FROM users u
LEFT JOIN ratings r ON u.id = r.user_id
GROUP BY u.id
ORDER BY total_ratings_given DESC;


