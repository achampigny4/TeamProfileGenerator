// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    };

};

module.exports = Engineer;
// √ Can set GitHUb account via constructor (1 ms)
// √ getRole() should return "Engineer"
// × Can get GitHub username via getGithub() (1 ms)