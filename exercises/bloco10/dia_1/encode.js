function encode(word) {
  return word.split('').map((character) => 
    character
    .replace('a', 1)
    .replace('e', 2)
    .replace('i', 3)
    .replace('o', 4)
    .replace('u', 5)
  ).join('');
}

function decode(word) {
  return word.split('').map((character) => 
    character
    .replace(1, 'a')
    .replace(2, 'e')
    .replace(3, 'i')
    .replace(4, 'o')
    .replace(5, 'u')
  ).join('');
}


const functions = { encode, decode };
module.exports = functions;