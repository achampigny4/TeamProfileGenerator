// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
    Employee.prototype.getName = function(name){
        return this.name;
    };
    Employee.prototype.getId = function(id){
        return this.id;
    };
    Employee.prototype.getEmail = function(email){
        return this.email;
    };
    Employee.prototype.getRole = function(role){
        return this.role;
    };
};
};

module.exports = Employee;