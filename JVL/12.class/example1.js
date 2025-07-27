//without class
var user1 = { firstName: "Pavithra", lastName: "Prakash", age: 22 };
var user2 = { firstName: "Santhanamagalinngam", lastName: "Nageshwaran", age: 22 };
var user3 = { firstName: "SathyaNarayanan", lastName: "Prakash", age: 17 };
function getUserName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
function getAge(age) {
    return age;
}
console.log(getUserName(user1.firstName, user1.lastName));
console.log(getAge(user2.age));
/* without class we need to make a function for the same set of activities */
