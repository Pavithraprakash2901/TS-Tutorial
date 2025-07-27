class NumberStack {
  private items: number[] = [];

  push(item: number){
    this.items.push(item);
  }

  pop(item: number){
    return this.items.pop();
  }
}

class StringStack {
  private items: string[] = [];

  push(item: string){
    this.items.push(item);
  } 

  pop(item: string){
    return this.items.pop();
  }
}

const numberStack = new NumberStack();
console.log(`The number stack Pushed is ${numberStack.push(1)}`);
console.log(`The number stack Pushed is ${numberStack.push(2)}`);
console.log(`The number stack poped is ${numberStack.pop(2)}`);


const stringStack = new StringStack();
console.log(`The string stack Pushed is ${stringStack.push('a')}`);
console.log(`The string stack Pushed is ${stringStack.push('b')}`);
console.log(`The string stack poped is ${stringStack.pop('b')}`);


console.log(new StringStack().push('a'));

