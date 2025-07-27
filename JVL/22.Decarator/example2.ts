function logMethod(target: any , propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args:any[]){
    console.log(`Calling ${propertyKey} method with args: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  }
}

class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }

  @logMethod
  subtract(a: number, b: number) {
    return a - b;
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(5, 3);
