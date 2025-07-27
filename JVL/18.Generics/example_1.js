var NumberStack = /** @class */ (function () {
    function NumberStack() {
        this.items = [];
    }
    NumberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    NumberStack.prototype.pop = function (item) {
        return this.items.pop();
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
        this.items = [];
    }
    StringStack.prototype.push = function (item) {
        this.items.push(item);
    };
    StringStack.prototype.pop = function (item) {
        return this.items.pop();
    };
    return StringStack;
}());
var numberStack = new NumberStack();
console.log("The number stack Pushed is ".concat(numberStack.push(1)));
console.log("The number stack Pushed is ".concat(numberStack.push(2)));
console.log("The number stack poped is ".concat(numberStack.pop(2)));
var stringStack = new StringStack();
console.log("The string stack Pushed is ".concat(stringStack.push('a')));
console.log("The string stack Pushed is ".concat(stringStack.push('b')));
console.log("The string stack poped is ".concat(stringStack.pop('b')));
console.log(new StringStack().push('a'));
