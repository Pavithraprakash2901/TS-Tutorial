class User_d {
  name: string;
  static totalCountOfUsers: number = 0;

  constructor (name: string) {
    this.name = name;
    User_d.totalCountOfUsers++
  }

  getName(){
    return this.name
  }

  static getTotalCountOfUsers(){
    return User_d.totalCountOfUsers
  }
}

console.log(`Total count of users is ${User_d.totalCountOfUsers}`)
const u_1 = new User_d("Pavithra")
const u_2 = new User_d("Santhanamagalinngam")
console.log(u_1.getName())
console.log(u_2.getName())
console.log(`the total count of users is ${User_d.getTotalCountOfUsers()}`)
console.log(`Total count of users is ${User_d.totalCountOfUsers}`)
