//create a manager table in employees_db ->? constructor
////SQL: CREATE TABLE manager(add columns datatypes,)
//separate function(s), to create, then view/add/update/delete
function managerView(){
    const query = 'SELECT * FROM manager';   
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res); 
    })
}
    
    function managerUpdate(){
        //UPDATE manager SET column1 = ?, column 2 = ?, WHERE condition; 
        connection.query(query, (err, res) => {
            if (err) throw err; 
            //res
        })
    }
    //adding more budgeting options would be nice (*update/upgrade feature*)
    function departmentCost(){
        //SUM() salary from role /for each department
        connection.query(query, (err, res) => {
            if (err) throw err; 
            console.table(res); 
        })
    }

exports.managerView = managerView(); 
exports.managerUpdate = managerUpdate(); 
exports.departmentCost = departmentCost();  