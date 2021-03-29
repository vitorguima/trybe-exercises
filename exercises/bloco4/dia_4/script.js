// exercício 4 - pt 2

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


let integerArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function returnHigherValue(array) {
  let higherValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2].length > array[index].length) {
        higherValue = array[index2];
      }
    }

  }
  return (higherValue);
}

console.log(returnHigherValue(integerArray));

