-- nested queries

-- Find all clients who are handled by branch that Michael Scott manages
-- assume you know Michael Scott's ID

SELECT client.client_name
FROM client
WHERE client.branch_id IN (
	SELECT branch_id
    FROM branch
    WHERE mgr_id = 102
);