var User_B1 = /** @class */ (function () {
    function User_B1(name, age) {
        this.name = name;
        this.age = age;
    }
    User_B1.isAdult = function (age) {
        return age > 18;
    };
    return User_B1;
}());
var user_b1 = new User_B1('Pavithra', 20);
console.log(User_B1.isAdult(17), '17');
console.log(User_B1.isAdult(20), '20');
//helps to have some more utility functions in the area
