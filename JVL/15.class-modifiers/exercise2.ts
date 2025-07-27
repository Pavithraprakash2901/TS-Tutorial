class Users_1 {
  private firstName: string;
  private lastName: string;
  private age: number 

  constructor(firstName: string , lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getAge(){
    return this.age;
  }

  getFirstName(){
    return this.firstName
  }

  setFirstName(firstName: string){
    this.firstName = firstName;
  }

  setAge(age: number){
    this.age = age;
  }
}

const user_1 = new Users_1('Pavithra', 'Prakash', 22);
console.log(user_1.getAge());
console.log(user_1.getFirstName());
user_1.setFirstName('Santhanamagalingam');
console.log(user_1.getFirstName());
user_1.setAge(19);
console.log(user_1.getAge());


