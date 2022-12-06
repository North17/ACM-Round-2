-- triggers

use acm_r2;

-- CREATE TABLE trigger_test( 
-- 	message VARCHAR(100)
-- );

-- do in command line client because we are changing the delimiter
-- default delimiter is ;

-- DELIMITER $$
-- CREATE
--     TRIGGER my_trigger BEFORE INSERT
--     ON employee
--     FOR EACH ROW BEGIN
--         INSERT INTO trigger_test VALUES('added new employee');
--     END$$
-- DELIMITER ;

INSERT INTO employee VALUES(109, 'Oscar', 'Martinez', '1968-02-19', 'M', 69000, 106, 3);

SELECT * FROM trigger_test;

-- IF ELSE statements can also be used
