// praticando TDD

// 1 Escreva a função addOne para passar nos testes já implementados.

// const assert = require('assert');

// const addOne = (array) => {
//   let newArray = [];
//   for (index of array) {
//     newArray.push(index + 1);
//   }
//   return newArray;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);


// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// 2 Escreva a função wordLengths para passar nos testes já implementados.

// const assert = require('assert');

// const wordLengths = (array) => {
//   let newArray = [];
//   for (word of array) {
//     newArray.push(word.length);
//   }

//   return newArray;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// 3 Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (array) => {
  let sum = 0;
  for (number of array) {
    sum += number;
  }

  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

