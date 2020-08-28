// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Engineer";
        Engineer.prototype.getName = function(name){
            return this.name;
        };
        Engineer.prototype.getId = function(id){
            return this.id;
        };
        Engineer.prototype.getEmail = function(email){
            return this.email;
        };
        Engineer.prototype.getRole = function(role){
            return this.role;
        };
    };

module.exports = Engineer;
//test results
// × Can set GitHUb account via constructor (5 ms)
// √ getRole() should return "Engineer"
// × Can get GitHub username via getGithub() (1 ms)