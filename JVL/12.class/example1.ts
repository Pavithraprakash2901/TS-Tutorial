//without class
let user1 = { firstName: "Pavithra", lastName: "Prakash", age: 22 };
let user2 = { firstName: "Santhanamagalinngam" , lastName: "Nageshwaran", age: 22}
let user3 = { firstName: "SathyaNarayanan", lastName: "Prakash", age: 17 };

function getUserName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

function getAge(age: number) {
  return age;
}

console.log(getUserName(user1.firstName, user1.lastName));
console.log(getAge(user2.age));



/* without class we need to make a function for the same set of activities */
