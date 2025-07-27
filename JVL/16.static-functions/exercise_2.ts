class User_B1{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  static isAdult(age: number){
    return age > 18;
  }
}

const user_b1 = new User_B1('Pavithra', 20);
console.log(User_B1.isAdult(17), '17');
console.log(User_B1.isAdult(20), '20');


//helps to have some more utility functions in the area
