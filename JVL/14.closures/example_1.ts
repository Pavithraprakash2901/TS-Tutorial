//without closure

let counterValue = 0

function incrementCounterValue(){
  counterValue++
}

function getCounterValue(){
  return counterValue
}

incrementCounterValue()
console.log(`the 1st time counter value is ${getCounterValue()}`);


incrementCounterValue()
console.log(`the 2st time counter value is ${getCounterValue()}`);
