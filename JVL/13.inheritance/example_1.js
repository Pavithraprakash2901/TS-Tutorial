// without inheritance 
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, " Role: ").concat(this.role);
    };
    Admin.prototype.getAge = function () {
        return "Age: ".concat(this.age, " role: ").concat(this.role);
    };
    Admin.prototype.manageUser = function () {
        return "Manage User with the Role: ".concat(this.role);
    };
    return Admin;
}());
console.log(new User('Pavithra', 'Prakash', 22).greet());
console.log(new Admin('Pavithra', 'Prakash', 22, 'Admin').manageUser());
