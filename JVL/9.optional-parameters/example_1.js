function greet(name, greeting) {
    return "".concat(greeting !== null && greeting !== void 0 ? greeting : "Hello", ", ").concat(name, "!");
}
console.log(greet("Pavithra"));
console.log(greet("Pavithra", "Hi"));
