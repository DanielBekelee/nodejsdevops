const { sum, subtract, multiply, divide } = require("../index");

test("adds numbers", () => {
  expect(sum(5, 7)).toBe(12);
});

test("subtracts numbers", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplies numbers", () => {
  expect(multiply(3, 5)).toBe(15);
});

test("divides numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by zero throws", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});
