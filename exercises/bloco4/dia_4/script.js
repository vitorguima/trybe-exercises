// exercício 3 - pt 2

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


let integerArray = [2, 4, 6, 7, 10, 0, -3];

function returnHigherValue(array) {
  let higherValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] < array[index]) {
        higherValue = array[index2];
      }
    }

  }
  return array.indexOf(higherValue);
}

console.log(returnHigherValue(integerArray));

