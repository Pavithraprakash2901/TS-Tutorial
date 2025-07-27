// with class

class User {
  firstName: string;
  lastName: string;
  age: number

  constructor(firstName: string , lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet(){
    return `hello ${this.firstName} ${this.lastName}`
  }

  getAge(){
    return this.age;
  }
}


//creating instances:

let user_1 = new User('Pavithra', 'Prakash', 22);
let user_2 = new User('Santhanamagalinngam', 'Nageshwaran', 22);

console.log(user_1.greet());
console.log(user_2.getAge());
