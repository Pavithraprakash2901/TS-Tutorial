function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}

console.log(greet("Pavithra"))
console.log(greet("Pavithra", "Hi"))
