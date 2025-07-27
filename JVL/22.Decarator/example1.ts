// decarator is a spl declaration >> it hiddenly pass an element for certain actions

class Calculator {
  add(a: number, b: number) {
    console.log(`The addition of ${a} and ${b} is ${a + b}`);
  }

  subtract(a: number, b: number) {
    console.log(`The subtraction of ${a} and ${b} is ${a - b}`);
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(5, 3);
