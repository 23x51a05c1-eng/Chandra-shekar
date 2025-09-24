// i. Function Declaration
function greet() {
  console.log("Hello from Function Declaration!");
}

// ii. Function Expression (definition stored in a variable)
const sayBye = function() {
  console.log("Goodbye from Function Expression!");
};

// iii. Arrow Function
const add = (a, b) => a + b;

// Calling functions
greet();
sayBye();
console.log("Sum =", add(5, 3));
