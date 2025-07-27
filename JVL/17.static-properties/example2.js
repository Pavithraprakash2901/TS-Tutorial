var User_d = /** @class */ (function () {
    function User_d(name) {
        this.name = name;
        User_d.totalCountOfUsers++;
    }
    User_d.prototype.getName = function () {
        return this.name;
    };
    User_d.getTotalCountOfUsers = function () {
        return User_d.totalCountOfUsers;
    };
    User_d.totalCountOfUsers = 0;
    return User_d;
}());
console.log("Total count of users is ".concat(User_d.totalCountOfUsers));
var u_1 = new User_d("Pavithra");
var u_2 = new User_d("Santhanamagalinngam");
console.log(u_1.getName());
console.log(u_2.getName());
console.log("the total count of users is ".concat(User_d.getTotalCountOfUsers()));
console.log("Total count of users is ".concat(User_d.totalCountOfUsers));
