// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.role = "Manager";

    Manager.prototype.getName = function (name) {
        return this.name;
    };
    Manager.prototype.getId = function (id) {
        return this.id;
    };
    Manager.prototype.getEmail = function (email) {
        return this.email;
    };
    Manager.prototype.getOffice = function (officeNumber) {
        return this.officeNumber;
    };
    Manager.prototype.getRole = function (role) {
        return this.role;
    };
};

module.exports = Manager;