function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

console.log("Hello from Node.js DevOps demo!");
console.log("Sum example:", sum(5, 7));

module.exports = { sum, subtract, multiply, divide };

