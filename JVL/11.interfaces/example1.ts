interface User {
  firstName: string;
  lastName: string;
  age?: number;
}

function greetUser(user: User) {
  return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails(user: User) {
  console.log(`User details: ${user.firstName} ${user.lastName} ${user.age}`);
}

let user1 = {
  firstName: "Pavithra",
  lastName: "Prakash",
  age: 22
};

console.log(greetUser(user1));
logUserDetails(user1);
