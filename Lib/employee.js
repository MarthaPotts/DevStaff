//employee (id, first_name, last_name, role_id, manager_id, pk)

//selects All: may need to offer a limit (eg large company)
//counting employees would be useful for taxes (500 or less etc)

function viewEmployee(){
    const query = 'SELECT * FROM  employee'; 
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    returnOrExit(); 
    }; 
    
    function viewSpecificEmployee(){
        inqirer.prompt({
            type: 'input', 
            name: 'specificEmployeeLastName', 
            message: 'What is the last name of the employee you are looking for?', 
        }, {
            type: 'input', 
            name: 'specificEmployeeFirstName',
            message: 'What is the first name of the employee you are looking for?', 
         }, {
             type: 'inut', 
             name: 'speciificEmployeeId', 
             message: 'What is the employee id of the employee you are looking for?', 
         })
         .then((answer) => {
             const query = 'SELECT id, last_name, first_name FROM employee WHERE id = ${answer.specificEmployeeId}, last_name = ${answer.specificEmployeeLastName}, first_name = ${answer.specificEmployeeFirstName}'; 
             connection.query(query, (err, res) => {
                 if (err) throw err; 
                console.table(res); 
            })
        })}; 
    
    function addEmployee(){
        inquirer.prompt({
            type: 'input', 
            name: 'employeeFirstName', 
            message: 'What is the first name of the employee?'
        }, 
        {
            type: 'input', 
            name: 'employeeLastName', 
            message: 'What is the last name of the employee?'
        }, {
            type:'input', 
            name: 'employeeId', 
            message: 'What is the employee id?'
        })
        .then( (answer) => {
        const query = `INSERT INTO employee(id, first_name, last_name)
        VALUES(\'${answer.employId}\',\'${answer.employeeFirstName}\', \'${answer.employeeLastName}\')`; 
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res); 
        });
    })}; 
    
    function updateEmployee(){
        inquirer.prompt({
            type: 'input', 
            name: 'updateEmployeeFirstName', 
            message: 'what is the first name of the employee to update?'
        }, {
            type: 'input', 
            name: 'updateEmployeeLastName', 
            message: 'what is the last name of the employee to update?', 
        }, {
            type: 'input', 
            name: 'updateEmployeeId', 
            message: 'what is the employee id to update?'
        })
        .then( (answer) => {
    const query = `UPDATE employee
    SET id = ${answer.updateEmployeeId}, first_name = ${answer.updateEmployeeFirstName}, last_name = ${answer.updateEmployeeLastName}
    WHERE id = ${answer.updateEmployeeId} ,first_name = ${answer.updateEmployeeFirstName}, last_name = ${answer.updateEmployeeLastName}`; 
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res); 
        })
    })
    returnOrExit(); 
    }; 
    
    function deleteEmployee(){
        inquirer.prompt({
            type: 'input', 
            name: 'deleteEmployee', 
            message: 'What is the id of the employee you want to delete?'
         }, {
             type: 'input', 
             name: 'deleteEmployeeFirstName', 
             message: 'what is the first name of the employee to delete?'
         }, {
             type: 'input', 
             name: 'deleteEmployeeLastName', 
             message: 'what is the last name of the employee to delete?'
         })
        .then( (answer) => {
        const query = `DELETE FROM employee WHERE first_name = ${answer.deleteEmployeeFirstName} AND last_name = ${answer.deleteEmployeeLastName} AND id = ${answer.deleteEmployee}`;
        connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    }) 
    returnOrExit(); 
    })}; 
    

    exports.viewEmployee = viewEmployee(); 
    exports.viewSpecificEmployee = viewSpecificEmployee(); 
    exports.addEmployee = addEmployee(); 
    exports.updateEmployee = updateEmployee(); 
    exports.deleteEmployee = deleteEmployee(); 