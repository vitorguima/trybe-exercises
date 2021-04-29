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

// const assert = require('assert');
// // escreva a função sumAllNumbers aqui

// const sumAllNumbers = (array) => {
//   let sum = 0;
//   for (number of array) {
//     sum += number;
//   }

//   return sum;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// 4 Escreva a função findTheNeedle para passar nos testes já implementados.

// const assert = require('assert');
// // escreva a função findTheNeedle aqui

// const findTheNeedle = (array, value) => {
//   for (index of array) {
//     if (index === value) {
//       return array.indexOf(index);
//     }
//   }
//   return -1;
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// tdd parte 3 ex 1

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const assert = require('assert');

// const greetPeople = (people) => {
//   let greeting = 'Hello ';
//   let newArray = [];

//   for (let person of people) {
//     newArray.push(`${greeting}${person}`);
//   }
//   return newArray;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.strictEqual(typeof(greetPeople) === 'function', true);
// assert.strictEqual(parameter.length, result.length);
// assert.deepStrictEqual(greetPeople(parameter), result);

// tdd parte 3 ex 2

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');
const { count } = require('console');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let countVogals = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      countVogals += 1
      results.push(countVogals);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels) === 'function', true);
assert.strictEqual(removeVowels(parameter), result);





