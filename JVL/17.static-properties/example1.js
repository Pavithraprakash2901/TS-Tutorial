var User_c = /** @class */ (function () {
    function User_c(name) {
        this.name = name;
    }
    User_c.prototype.getName = function () {
        return this.name;
    };
    return User_c;
}());
// will get the count for all the total users
var totalCountOfUsers = 0;
function createNewUser(name) {
    totalCountOfUsers++;
    return new User_c(name);
}
var u1 = createNewUser("Pavithra");
var u2 = createNewUser("Santhanamagalinngam");
console.log(u1.getName());
console.log(u2.getName());
console.log("the total count of users is ".concat(totalCountOfUsers));
