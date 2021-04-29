// bônus 4
const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = 0;
  array.sort(function (a, b) { return a - b});

  largestNumber = array[array.length - 1];

  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof(getLargestNumber) === 'function', true);
assert.strictEqual(getLargestNumber(parameter), 99);
