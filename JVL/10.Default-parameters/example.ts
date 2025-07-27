var concatString  = function (a:string , b:string, c:string = "default") {
  return a + b + c;
}

console.log(concatString("a", "b", "c"));
console.log(concatString("a", "b"));

