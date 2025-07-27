function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User details: ".concat(user.firstName, " ").concat(user.lastName, " ").concat(user.age));
}
var user1 = {
    firstName: "Pavithra",
    lastName: "Prakash",
    age: 22
};
console.log(greetUser(user1));
logUserDetails(user1);
