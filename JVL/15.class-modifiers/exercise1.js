// without modifiers
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return User;
}());
var usr_1 = new User("Pavithra", "Prakash", 22);
console.log(usr_1.firstName);
usr_1.firstName = "Santhanamagalingam";
console.log(usr_1.firstName);
