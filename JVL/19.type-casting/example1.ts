interface User{
  name: string;
  age: number
}

const json_api_result = '{"name": "pavi", "age": "30"}'

const user_a1 = JSON.parse(json_api_result) as User

console.log(`name: ${user_a1.name}, age: ${user_a1.age}`); // cannot allow extra params 

