// the generics is one of the way to eliminate the common code on the codebase

class stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(item: T) {
    return this.items.pop();
  }

}

const numberStack_1 = new stack<number>();
const stringStack_1 = new stack<string>();

numberStack_1.push(1);
numberStack_1.push(2);
console.log(numberStack_1.pop(2));


stringStack_1.push('a');
stringStack_1.push('b');
console.log(stringStack_1.pop('b'));
