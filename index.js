//dependencies: 
const mysql = require('mysql'); 
const inquirer = require('inquirer'); 
const cTable = require('console.table'); 
const { exit } = require('node:process');  
//import queryFunctions:  
const department = require('./Lib/department'); 
const employee = require('./Lib/employee'); 
const role = require('./Lib/role'); 
const manager = require('./Lib/manager'); 
const budget = require('./Lib/budget'); 

//connect to db //this may get moved to dot.env/config
const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306, 
    user: 'root', 
    password: '',
    database: 'employees_db'
}); 
connection.connect((err) => {
    if (err) throw err; 
    startMenu(); 
})

//initial
const startMenu = () => {

    inquirer.prompt({
        name: 'action', 
        type: 'list', 
        message: 'What would you like to do?', 
        choices: [
            'View all Departments', 
            'View specific Department',
            'Add new Department', 
            'Update existing Department',
            'Delete a Department', 

            'View all Employee Records',
            'View specific Employee Record',  
            'Add an Employee Record', 
            'Update Employee Information', 
            'Delete an Employee Record', 

            'View Employee Roles',
            'View specific Employee Role',  
            'Add Employee Role', 
            'Update Employee Role', 
            'Delete Employee Role',
            
            'View Employees by Manager', 
            'Update Employees by Manager', 

            'View Total Utilized Budget of a Department',

            'EXIT',
        ],
    }).then((answer) => {
        switch (answer.action) {
            //departments
           case 'View all Departments': 
                viewDepartment(); 
                break;
            case 'View specific Department': 
                specificDepartment(); 
                break;  
            case 'Add new Department':  
                addDepartment(); 
                 break; 
            case 'Update existing Department': 
                updateDepartment(); 
                break;
            case 'Delete a Department': 
                deleteDepartment(); 
                break;

            //employees
            case 'View all Employee Records':
                viewEmployee(); 
                break;
            case 'View specific Employee Reccord': 
                viewSpecificEmployee(); 
                break;   
            case 'Add an Employee Record': 
                addEmployee(); 
                break;  
            case 'Update Employee Information': 
                updateEmployee(); 
                break;
            case 'Delete an Employee Record': 
                deleteEmployee(); 
                break;
                
            //Role
            case 'View Employee Roles': 
                //function viewRole()
                break; 
            case 'View specific Employee Role':
            //function specificRole(); 
                break; 
            case 'Add Employee Role': 
                //function addRole()
                break;  
            case 'Update Employee Role': 
                //function updateRole()
                break; 
            case 'Delete Employee Role':  
                //function deleteRole()
                break;
                
            //Bonus Points!
            case 'View Employees by Manager': 
                //function managerView()
                break; 
            case 'Update Employees by Manager': 
                //function managerUpdate()
                break; 
            case 'View Total Utilized Budget of a Department': 
                    //function departmentCost()
                    //if('failed_to_write_this_one){
                    //console.log('Does not exist'); }; 
                break; 
               
            case 'EXIT':
                connection.end(); 
                break; 
            default: 
                console.log(`Invalid action: ${answer.action}`);  
        }
    }); 
};

//function to 'return to start || exit' after each querySession'
//may need to export this function to other 3:
function returnOrExit() {
    inquirer.prompt({
    type: 'list', 
    name: 'returnOrExit', 
    message: 'Would you like to: ',
    choices: [
        'Return to Start', 'Exit', 
    ],
}).then((answer) => {
    if (answer.returnOrExit === 'Return to Start'){
        startMenu(); 
    }
    else if (answer.returnOrExit === 'Exit') {
        exit(); 
    }
})}; 

//exit application 
function exit() {
    connection.end(); 
    console.log('See you next time!');
};
//this should have a backup function d2 db involvement; 
//some sort of logging behavior or write(log) to a (retrievable) file in the event of error/mishap
exports.returnOrExit = returnOrExit(); 