DROP DATABASE IF EXISTS employees_db; 
CREATE database employees_db;

USE employees_db; 
--main
CREATE TABLE department(
    --PRIMARY KEY(id)?
    id INT NOT NULL, 
    PRIMARY KEY(id), 
    name VARCHAR(30), 
);
--extended A
CREATE TABLE role(
    id INT NOT NULL, 
    PRIMARY KEY (id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, --foreign key, needs to point to dept PK
  ); 
--extended B
CREATE TABLE employee(
    id INT NOT NULL, 
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, --FK, needs to point to PK
    manager_id INT, 
  --This field may be null if the employee has no manager
); 
--employee_db: structure: 
--Business->Department->Role->Employee

--SQL id INT PRIMARY KEY

--mySQL id INT NOT NULL, 
--PRIMARY KEY(id)