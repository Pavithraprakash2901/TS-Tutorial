// with class
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
//creating instances:
var user_1 = new User('Pavithra', 'Prakash', 22);
var user_2 = new User('Santhanamagalinngam', 'Nageshwaran', 22);
console.log(user_1.greet());
console.log(user_2.getAge());
