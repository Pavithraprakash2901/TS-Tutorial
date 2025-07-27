var Users_1 = /** @class */ (function () {
    function Users_1(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Users_1.prototype.getAge = function () {
        return this.age;
    };
    Users_1.prototype.getFirstName = function () {
        return this.firstName;
    };
    Users_1.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Users_1.prototype.setAge = function (age) {
        this.age = age;
    };
    return Users_1;
}());
var user_1 = new Users_1('Pavithra', 'Prakash', 22);
console.log(user_1.getAge());
console.log(user_1.getFirstName());
user_1.setFirstName('Santhanamagalingam');
console.log(user_1.getFirstName());
user_1.setAge(19);
console.log(user_1.getAge());
