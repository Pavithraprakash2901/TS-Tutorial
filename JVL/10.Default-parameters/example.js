var concatString = function (a, b, c) {
    if (c === void 0) { c = "default"; }
    return a + b + c;
};
console.log(concatString("a", "b", "c"));
console.log(concatString("a", "b"));
