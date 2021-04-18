//departments (id, name, pk)

function viewDepartment(){
    const query = 'SELECT * FROM department'; 
    connection.query(query, (err, res) => {
        if(err) throw err; 
        console.table(res); 
        returnOrExit();
    })}; 
    
    function specificDepartment(){
    inqirer.prompt({
        type: 'input', 
        name: 'departName', 
        message: 'Please enter the name of the department you would like to view:', 
    })
    .then((answer) => {
        const query = 'SELECT name FROM department WHERE name = ${answer.departName}'; 
        connection.query(query, (err, res) => {
            if (err) throw err; 
            console.table(res); 
        })
        returnOrExit(); 
    })}; 
    
    function addDepartment(){
    inquirer.prompt({
        type: 'input', 
        name: 'addDepartment', 
        message: 'Type the name of the department you want to add: ', 
    }, {
        type: 'input', 
        name: 'addDepartId', 
        message: 'What is the department id number?'
    }).then( (answer) => {
    const query = `INSERT INTO department(name, id)
      VALUES(${answer.addDepartment}, ${answer.addDepartId})`; 
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    returnOrExit(); 
    })}; 
    
    function updateDepartment() {
    inquirer.prompt({
        type:'input', 
        name: 'updateDepartment', 
        message: 'please enter the department name you would like to update:',
    }, {
        type: 'input', 
        name: 'updateDepartId', 
        message: 'please enter the id of department you would like to update:'
    })
    .then((answer) => {
    const query = `UPDATE department
    SET name = ${answer.updateDepartment}
    WHERE id = ${answer.updateDepartId}`; 
    connection.query(query, (err, res) =>{
        if (err) throw err; 
        console.table(res); 
    })})
    returnOrExit(); 
    }; 
    
    function deleteDepartment(){
    inquirer.prompt({
        type: 'input', 
        name: 'deleteDepartment', 
        message: 'What Department would you like to delete?', 
    }).then( (answer) => {
    const query = 'DELETE FROM department WHERE name = ${answer.deleteDepartment}';
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    returnOrExit(); 
    })}; 

    const deleteDepartment = deleteDepartment(); 
    const updateDepartment = updateDepartment(); 
    const addDepartment = addDepartment(); 
    const specificDepartment = specificDepartment(); 
    const viewDepartment = viewDepartment(); 
    exports.deleteDepartment = deleteDepartment(); 
    exports.updateDepartment = updateDepartment(); 
    exports.addDepartment = addDepartment(); 
    exports.specificDepartment = specificDepartment(); 
    exports.viewDepartment = viewDepartment();