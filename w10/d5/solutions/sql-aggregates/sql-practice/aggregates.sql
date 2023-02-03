----------
-- Step 1
----------

-- For readability of output
SELECT '----- Number of cats ------';

-- Number of cats
SELECT COUNT(*)
FROM cats;

----------
-- Step 2
----------

-- For readability of output
SELECT '----- Oldest cat ------';

-- Oldest cat
SELECT name, MIN(birth_year)
FROM cats;

-- For readability of output
SELECT '----- Youngest cat ------';

-- Youngest cat
SELECT name, MAX(birth_year)
FROM cats;

-- For readability of output
SELECT '----- Oldest and youngest cats? -----';

-- Question: Can you query for both cats in one simple SELECT?
-- Answer: No, because this query returns just 1 result
SELECT name, MIN(birth_year), MAX(birth_year)
FROM cats;

----------
-- BONUS Step 1
----------

-- For readability of output
SELECT '----- Number of toys per cat ------';

-- Number of toys per cat
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY toys.cat_id;

----------
-- BONUS Step 2
----------

-- For readability of output
SELECT '----- Cats "spoiled" with two or more toys ------';

-- Cats "spoiled" with two or more toys
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY cat_id
HAVING toy_count >= 2;
