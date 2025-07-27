// the generics is one of the way to eliminate the common code on the codebase
var stack = /** @class */ (function () {
    function stack() {
        this.items = [];
    }
    stack.prototype.push = function (item) {
        this.items.push(item);
    };
    stack.prototype.pop = function (item) {
        return this.items.pop();
    };
    return stack;
}());
var numberStack_1 = new stack();
var stringStack_1 = new stack();
numberStack_1.push(1);
numberStack_1.push(2);
console.log(numberStack_1.pop(2));
stringStack_1.push('a');
stringStack_1.push('b');
console.log(stringStack_1.pop('b'));
