//with closure (Encapsulation - binding the data together so it cannot affect others)

function createClosure(){

  let counterValue = 0;

  return {
    incrementCounterValue(){
      counterValue++
    },
    getCounterValue(){
      return counterValue
    },
    decrementCounterValue(){
      counterValue--
    }
  }
}

const counter_1 = createClosure()
const counter_2 = createClosure()

console.log(`the 1st time counter_1 value is ${counter_1.getCounterValue()}`);
counter_1.incrementCounterValue()
console.log(`the 2st time counter_1 value is ${counter_1.getCounterValue()}`);
counter_1.decrementCounterValue()
console.log(`the 3st time counter_1 value is ${counter_1.getCounterValue()}`);
