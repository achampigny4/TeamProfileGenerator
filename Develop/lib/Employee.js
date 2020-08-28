// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";

    Employee.prototype.getName = function(name){
        return this.name;
    // };
    // getId() {
    //     return this.id;
    // };
    // getEmail() {
    //     return this.email;
    // };
    // getRole() {
    //     return this.role;
    }; // Returns 'Employee'
};

module.exports = Employee;