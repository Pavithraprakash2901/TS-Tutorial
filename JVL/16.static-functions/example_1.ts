class User_B{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getUserBAge(){
    return this.age;
  }
}

const user_b = new User_B('Pavithra', 20);
console.log(user_b.getUserBAge());
