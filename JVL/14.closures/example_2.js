//with closure
function createClosure() {
    var counterValue = 0;
    return {
        incrementCounterValue: function () {
            counterValue++;
        },
        getCounterValue: function () {
            return counterValue;
        },
        decrementCounterValue: function () {
            counterValue--;
        }
    };
}
var counter_1 = createClosure();
var counter_2 = createClosure();
console.log("the 1st time counter_1 value is ".concat(counter_1.getCounterValue()));
counter_1.incrementCounterValue();
console.log("the 2st time counter_1 value is ".concat(counter_1.getCounterValue()));
counter_1.decrementCounterValue();
console.log("the 3st time counter_1 value is ".concat(counter_1.getCounterValue()));
