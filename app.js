// Import inquirer and module containing database query

const inquirer = require('inquirer');
const db =require('./db/queries');

// function to start the application to display a list of choices to the user
function startApp() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'action',
            message: '', // don't forget to add message
            choices: [
                'View all departments',
                'view all roles',
                'View all employees', 
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an empoyee role',
                'Exit'
            ]
        }
        // asynchronous operation for options to view, add, update, or exit the application.
    ]).then(answer => { 
        
        // After the user selects an option, handle their choice with a switch statement
        switch (answer.action) {
                case 'View all departments':
            break;
                case 'View all employees':
            break;
                case 'Add a department':
            break;
                case 'Add a role':
            break;
                case 'Add an employee':
            break;
                case 'Update an employee role':
            break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit();
        }
    });
}

// Call the startApp function to begin the application
startApp();