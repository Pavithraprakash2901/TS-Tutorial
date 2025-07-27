// intersection of two interfaces is called as intersection-types

interface Employee{
  firstName: string;
  lastName: string;
  age: number;
}

interface Admin{
  role: string;
  isAccessLevel: boolean;
}

type AdminEmployee = Employee & Admin

let adminEmployee: AdminEmployee = {
  firstName: "Pavithra",
  lastName: "Prakash",
  age: 22,
  role: "Admin",
  isAccessLevel: true
}

console.log(adminEmployee);

// also we can able to access this individually


console.log(adminEmployee.firstName);
