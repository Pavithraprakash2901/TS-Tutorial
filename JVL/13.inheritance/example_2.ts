// with inheritance

class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  greet(){
    return `hello ${this.firstName} ${this.lastName}`
  }
}

class User_A extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}

class Admin extends User_A {
  role: string;
  
  constructor(firstName: string, lastName: string, age: number, role: string) {
    super(firstName, lastName, age);
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}


const user1 = new User_A("Pavithra", "Prakash", 22);
const user2 = new Admin("sathya", 'narayanan', 17, 'editor')
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.getRole());
