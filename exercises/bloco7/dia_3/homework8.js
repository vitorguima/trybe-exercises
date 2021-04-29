const assert = require('assert');

const removeMiddle = (array) => {
  const newArray = [];
  const middlePosition = Math.floor((array.length - 1) / 2);

  newArray[0] = array[middlePosition];
  array.splice(middlePosition, 1);

  return newArray;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
