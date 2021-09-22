// sum.test.js
const sum = require('../src/sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});