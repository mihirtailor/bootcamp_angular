// What is Typescript?
// Typescript is a superset of JavaScript. use to build large application with data types
// typescript is transpiled to JavaScript.

// we can install typescript using npm
// npm install -g typescript

var x = 10;
if (x == 10) {
  // redefine the variable x globally
  var x = 20;
}
console.log(x); // 20

let y = 10;
if (y == 10) {
  // redefine the variable y locally
  let y = 20;
}

console.log(y); // 10

// "let" is preferred over var as best pracrice