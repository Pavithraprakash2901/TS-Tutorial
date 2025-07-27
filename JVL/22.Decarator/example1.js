// decarator is a spl declaration >> it hiddenly pass an element for certain actions
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("The addition of ".concat(a, " and ").concat(b, " is ").concat(a + b));
    };
    Calculator.prototype.subtract = function (a, b) {
        console.log("The subtraction of ".concat(a, " and ").concat(b, " is ").concat(a - b));
    };
    return Calculator;
}());
var calc = new Calculator();
calc.add(5, 3);
calc.subtract(5, 3);
