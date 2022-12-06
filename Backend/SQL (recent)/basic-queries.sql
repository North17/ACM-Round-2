use acm_r2;

-- Finding all clients
SELECT * 
FROM employee;

-- Obtaining all employees ordered by salary
SELECT * 
FROM employee
ORDER BY salary;

-- Order employees by sex, then name
SELECT * 
FROM employee
ORDER BY sex, first_name;

-- Using aliases
SELECT 
first_name as forename,
last_name as lastname
FROM employee;

-- Using DISTINCT
SELECT 
DISTINCT sex
FROM employee;

-- count() func
SELECT COUNT(emp_id)
FROM EMPLOYEE;

-- a better example
SELECT COUNT(emp_id) 
FROM employee
WHERE sex = 'F' and birth_date > '1970-01-01';

-- total no of men and women
SELECT 
COUNT(sex) as No , sex
FROM employee
GROUP BY sex;

-- total sales per employee
SELECT 
SUM(total_sales), emp_id
FROM works_with
GROUP BY emp_id;

-- using wildcards
SELECT *
FROM client
WHERE client_name 
LIKE "%LLC"; 

-- similarly we use _ for single char