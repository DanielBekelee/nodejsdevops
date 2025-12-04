const { sum } = require("../index");

test("adds numbers", () => {
  expect(sum(5, 7)).toBe(12);
});
