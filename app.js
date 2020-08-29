const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//employee objects array
const employees = [];

addEmployee = () => {
    console.log("Add another Team Member");
    return inquirer.prompt([
        //questions about Employees
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Employee's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Employee's email address:",
            name: "email"
        },
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            return inquirer.prompt([
                //question about Engineer
                {
                    type: "input",
                    message: "Engineer's github user name:",
                    name: "github"
                }
            ])} else  {
                return inquirer.prompt([
                    //question about Intern
                    {
                        type: "input",
                        message: "Intern's school:",
                        name: "school"
                    }
                ])
        }
    // }).then((employeeResults) => {
    //     employeeResults.role.choices = role;
    //     const { name, id, email, role, github, school } = employeeResults;
    //     const newEmployee = new Employee(name, id, email, role, github, school);
    //     employees.push(newEmployee);
    //     ////////////////////////
    //     console.log(employees);
    //     /////////////////////////
    //     addEmployee();
    })
};

//initializing Prompts
init = () => {
    console.log("Welcome! \nTo Generate a Team, \nAnswer the following prompts \nYour team will be organized in the \noutput folder team.html file.");
    return inquirer.prompt([
        //questions about Employee
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        //////////////////
        console.log(employees);
        //////////////////
        addEmployee();
    })
};

//initialize program and begin asking user questions
init();