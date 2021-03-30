// 4.4 - exercício bônus - 1
// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

let romanNumbers = {
  I: 1,
  V: 5,
  IX: 9,
  X: 10,
  XL: 49,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

// for (let index in romanNumbers) {
//   console.log(index, romanNumbers[index]);
// }

// IVMXVV = -4 + 1000 + 10 + 5 + 5;

let romanNumber = 'IVXVVM' 

console.log(romanNumbers.length)