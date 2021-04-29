// bônus 4
const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = 0;
  let newArray = array;
  newArray = newArray.slice().sort(function (a, b) { return a - b});
  largestNumber = newArray[newArray.length - 1];

  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const unchangedArray = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof(getLargestNumber) === 'function', true);
assert.strictEqual(getLargestNumber(parameter), result);
assert.deepStrictEqual(parameter, unchangedArray);

getLargestNumber(parameter);
