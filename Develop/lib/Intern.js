// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Intern";

    Intern.prototype.getName = function (name) {
        return this.name;
    };
    Intern.prototype.getId = function (id) {
        return this.id;
    };
    Intern.prototype.getEmail = function (email) {
        return this.email;
    };
    Intern.prototype.getRole = function (role) {
        return this.role;
    };

};

module.exports = Intern;
//test results
// × Can set school via constructor (4 ms)
// √ getRole() should return "Intern"
// × Can get school via getSchool() (1 ms)