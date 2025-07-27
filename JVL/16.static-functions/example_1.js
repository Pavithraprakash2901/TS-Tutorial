var User_B = /** @class */ (function () {
    function User_B(name, age) {
        this.name = name;
        this.age = age;
    }
    User_B.prototype.getUserBAge = function () {
        return this.age;
    };
    return User_B;
}());
var user_b = new User_B('Pavithra', 20);
console.log(user_b.getUserBAge());
