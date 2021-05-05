const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  return names.toString().toLowerCase().split('').reduce((a, b,) => {
    if (b === 'a') {
      a += 1
    }
    return a;
  },0);
}

assert.deepStrictEqual(containsA(), 20);