// exercício 5 - pt 2

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


let integerArray = [2, 3, 2, 5, 8, 2, 3];

function returnHigherValue(array) {
  let higherValue = 0;

  for (let index = 0; index < array.length; index += 1) {

    for (let index2 = 0; index2 < array.length; index2 += 1) {
      let possibleValueCount1 =  0;
      let possibleValueCount2 = 0;
      let possibleValue = 0;

      if (array[index2] == array[index]) {
        possibleValueCount1 += 1;
        possibleValueCount2 = possibleValueCount1;
        higherValue = array[index2];
        possibleValue = higherValue;
        
        if (possibleValueCount2  > possibleValueCount1 && possibleValue > higherValue) {
          higherValue = possibleValue
        }
    } } 
    return (higherValue);
  }
}
  console.log(returnHigherValue(integerArray));


  // se a contagem de igualdade para um número A for maior que de B, devemos manter A, caso contrário, mantemos B




  // criar let possibleValue = 0;