//role(id, pk, salary, department_id)

function viewRole(){
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
         if (err) throw err; 
        console.table(res); 
    })
    returnOrExit(); 
}; 
    
    //add a function for specific role()
    //{inqirer.prompt({}).then((answer) => {const query = 'SELECT DISTINCT column1, column2 FROM role'; connection.query(query, (err, res) => {if (err) throw err; //res})})}
    
    function addRole(){
        inquirer.prompt({
    
        })
        .then( (answer) => {
        const query = `INSERT INTO role()
        VALUES()`; 
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    })
    returnOrExit(); 
}; 
    
    function updateRole(){
        inquirer.prompt({
    
        })
        .then( (answer) => {
        const query = `UPDATE role
        SET ${column_name}
        WHERE ?`; 
        connection.query(query, (err, res) => {
            if (err) throw err; 
            console.table(res); 
        })
        })
        returnOrExit(); 
    }; 
    
    function deleteRole(){
        inquirer.prompt({
            type: 'input', 
            name: 'deleteRole', 
            message: 'What role would you like to delete?'
        })
        .then( (answer) => {
        //DELETE const query = 'DELETE FROM role WHERE name = `${answer.deleteRole}`';
        connection.query(query, (err, res) => {
            if (err) throw err; 
            console.table(res); 
        })
        })
        returnOrExit(); 
    }; 

exports.viewRole = viewRole(); 
exports.deleteRole = deleteRole(); 
exports.updateRole = updateRole(); 
exports.addRole = addRole(); 