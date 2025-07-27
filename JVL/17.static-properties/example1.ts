class User_c {
  name: string;

  constructor (name: string) {
    this.name = name;
  }

  getName(){
    return this.name
  }
}
// will get the count for all the total users

let totalCountOfUsers = 0 

function createNewUser(name){
  totalCountOfUsers++ //tight coupling
  return new User_c(name)
}

let u1= createNewUser("Pavithra")
let u2 = createNewUser("Santhanamagalinngam")

console.log(u1.getName())
console.log(u2.getName())
console.log(`the total count of users is ${totalCountOfUsers}`)

