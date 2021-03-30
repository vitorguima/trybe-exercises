// exercicio 6 pt - 2
// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let number = 4;

function sumArrayUntilnumber(number) {
  let sumAllNumbers = 0;
  for (let i = 1; i <= number; i += 1) {
    sumAllNumbers += i;
  }
  return sumAllNumbers;
}

console.log(sumArrayUntilnumber(number))