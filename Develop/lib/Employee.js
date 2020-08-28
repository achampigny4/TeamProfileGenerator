// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";

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

module.exports = Employee;