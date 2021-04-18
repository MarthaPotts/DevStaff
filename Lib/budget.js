//adding more budgeting options would be nice (*update/upgrade feature*)
function departmentCost(){
    //SUM() salary from role /for each department
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    returnOrExit(); 
}

exports.departmentCost = departmentCost(); 