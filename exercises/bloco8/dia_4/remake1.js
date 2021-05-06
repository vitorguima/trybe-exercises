
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// other way1
function flatten() {
  return arrays.reduce((a, b) => [...a,...b]);
}

// other way2

const flatten2 = () => {
  const [a, b, c] = arrays;
  return [...a, ...b, ...c];
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);