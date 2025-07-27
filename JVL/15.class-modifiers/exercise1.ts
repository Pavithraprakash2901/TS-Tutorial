// without modifiers

class Users {
  firstName: string;
  lastName: string;
  age: number 

  constructor(firstName: string , lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}


const usr_1 = new User("Pavithra", "Prakash", 22);
console.log(usr_1.firstName);

usr_1.firstName = "Santhanamagalingam"; //changing the object value directly make the code more weak
console.log(usr_1.firstName);
