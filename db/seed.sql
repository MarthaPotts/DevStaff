DROP DATABASE IF EXISTS employees_db; 
CREATE database employees_db;

USE employees_db; 
--main
CREATE TABLE department(
    id INT NOT NULL, 
    PRIMARY KEY(id), 
    name VARCHAR(30), 
);
--extended A
CREATE TABLE role(
    id INT NOT NULL, 
    PRIMARY KEY(id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, --foreign key, needs to point to dept PK
  ); 
--extended B
CREATE TABLE employee(
    id INT NOT NULL, 
    PRIMARY KEY(id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, --FK, needs to point to PK
    manager_id INT, 
  --This field may be null if the employee has no manager
); 
--? seed id/generated?
INSERT INTO department(name)
VALUES('Nursing'), 
('Therapy'), 
('Dietary'), 
('Housekeeping'), 
('Maintenance'), 
('Business_Office'), 
('Social_Services'), 
('Activities')
('Administration'); 

INSERT INTO role(title, salary, {department_id})
VALUES('Unit_Manager', 60,000, {department_id}), 
('Physical_Therapist', 70,000, {department_id}), 
('Senior_Dietary_Manager', 55,000, {department_id}), 
('second_shift_housekeeper', 20,000, {department_id}), 
('Lead_Maintenance', 50,000, {department_id}), 
('pay_roll_specialist', 45,000, {department_id}), 
('Licensed_Social_Worker', 60,000, {department_id}), 
('Activities_Assistant', 20,000, {department_id}), 
('Administrator', 80,000, {department_id}); 

INSERT INTO employee(first_name, last_name, {role_id}, {manager_id})
VALUES('Anita', 'Penn', {role_id}, {manager_id}), 
('Hevee', 'Waits', {role_id}, {manager_id}), 
('Sherry', 'Baker', {role_id}, {manager_id}), 
('Seymour', 'Butts', {role_id}, {manager_id}), 
('Iman', 'Azole', {role_id}, {manager_id}), 
('Geraldine', 'Cash', {role_id}, {manager_id}) 
('Kaitlyn', 'Ball', {role_id}, {manager_id}),
('Christopher', 'Rice', {role_id}, {manager_id}); 
--{role_id}, {department_id}, {manager_id} may be a join thing. Ask.