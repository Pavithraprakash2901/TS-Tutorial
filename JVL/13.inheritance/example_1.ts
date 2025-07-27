// // without inheritance 

// class User {
//   firstName: string;
//   lastName: string;
//   age: number

//   constructor(firstName: string , lastName: string, age: number){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   greet(){
//     return `hello ${this.firstName} ${this.lastName}`
//   }

//   getAge(){
//     return this.age;
//   }
// }

// class Admin {
//   firstName: string;
//   lastName: string;
//   age: number
//   role: string;

//   constructor(firstName: string , lastName: string, age: number, role: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.role = role;
//   }


//   greet(){
//     return `hello ${this.firstName} ${this.lastName} Role: ${this.role}`
//   }

//   getAge(){
//     return `Age: ${this.age} role: ${this.role}` 
//   }

//   manageUser(){
//     return `Manage User with the Role: ${this.role}`
//   }
// }


// console.log(new User('Pavithra', 'Prakash', 22).greet());
// console.log(new Admin('Pavithra', 'Prakash', 22, 'Admin').manageUser());
