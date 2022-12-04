use acm_r2;

-- list of all client and branch supliers' names
SELECT client_name
FROM client
UNION
SELECT supplier_name
FROM branch_supplier;

-- INSERT INTO branch VALUES(4, 'Buffalo', NULL, NULL);

-- Find all branches and names of managers

SELECT employee.emp_id, employee.first_name, branch.branch_name, branch.branch_id
FROM employee
JOIN branch
ON employee.emp_id = branch.mgr_id;

-- LEFT JOIN includes all records from left table
-- RIGHT JOIN includes all records from right table

