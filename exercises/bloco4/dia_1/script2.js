// exercício 1
// let a = 10;
// let b = 6;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(div = a / b);
// console.log(a % b)

// exercício 2
// let a = 20;
// let b = 30;

// if (a > b) {
//     console.log(a);
// }
// else {
//     console.log(b);
// }

// exercício 3
// let a = 100;
// let b = 900;
// let c = 60;

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// }
// else if (c > a && c > b) {
//     console.log(c);
// }
// else {
//     console.log("error")
// }

// exercício 4
// let a = -20;

// if (a > 0) {
//     console.log('positive');
// }
// else if (a < 0) {
//     console.log('negative');
// }
// else {
//     console.log('zero')
// }

// exercício 5
// let a = 20;
// let b = 30;
// let c = 130;
// let soma = a + b + c

// if (soma == 180) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// exercício 6
// let a = 'lalala';

// if (a.toLowerCase() == 'pawn') {
//     console.log('one square diagonally in a forward direction');
// }
// else if (a.toLowerCase() == 'knight') {
//     console.log('in an L shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically');
// }
// else if (a.toLowerCase() =='bishop') {
//     console.log('diagonally any number of squares');
// }
// else if (a.toLowerCase == 'rook') {
//     console.log('horizontally or vertically any number of squares');
// }
// else if (a.toLowerCase == 'queen') {
//     console.log('diagonally, horizontally, or vertically any number of squares');
// }
// else if (a.toLowerCase == 'king') {
//     console.log('ne square in any direction');
// }
// else {
//     console.log ('piece does not exist')
// }

// exercício 7
// let a = 92;

// if (a >= 90 && a <=100) {
//     console.log('A');
// }
// else if (a >= 80 && a < 90) {
//     console.log('B');
// }
// else if (a >= 70 && a < 80) {
//     console.log('C');
// }
// else if (a >=60 && a < 70) {
//     console.log('D');
// }
// else if (a >= 50 && a < 60) {
//     console.log('E');
// }
// else if (a >= 0 && a < 50) {
//     console.log('F');
// }
// else {
//     console.log('nota inválida!')
// }

// exercício 8

// let a = 3;
// let b = 1;
// let c = 2;
// let mult = a * b * c

// if ((mult % 2) == 0 ) {
//     console.log(true);
// }
// else {
//     console.log('false)
// }

// // exercício 9

// let a = 2;
// let b = 4;
// let c = 6;

// if ((a % 2) + (b % 2) + (c % 2) != 0) {
//     console.log ('true');
// }
// else {
//     console.log ('false');
// }


// exercício 10

// let productSell = 1500;
// let productCost = 1200;
// const quantity = 1000; 
// let productTotalCost = productCost * 1.2;
// let stonks = (productSell - productTotalCost) * quantity;


// if (stonks > 0 && productSell > 0 && productCost  > 0) {
//     console.log('O valor praticados resultarão em um lucro é', stonks);
// }
// else if (stonks < 0 && productSell > 0 && productCost > 0) {
//     console.log('os valores praticados resultarão em um prejuízo de', stonks);
// }
// else if (stonks < 0 && productSell < 0 || productCost < 0) {
//     console.log ('não são permitidos valores negativos para venda ou custo')
// }
// else {
//     console.log('erro na formatação de números inseridos: verificar custo e venda')
// }

// Exercício 11
let inssTax;
let irTax;
let grossRevenue = 3000;

if (grossRevenue <= 1556.94) {
  inssTax = grossRevenue * 0.08;
} else if (grossRevenue <= 2594.92) {
  inssTax = grossRevenue * 0.09;
} else if (grossRevenue <= 5189.82) {
  inssTax = grossRevenue * 0.11;
} else {
  inssTax = 570.88
}

let baseRevenue = grossRevenue - inssTax;

if (baseRevenue <= 1903.98) {
  console.log (grossRevenue)
} else if (baseRevenue <= 2826.65) {
  console.log (baseRevenue - ((0.075 * baseRevenue) - 142.80));
} else if (baseRevenue <= 3751.05) {
  console.log (baseRevenue - ((0.15 * baseRevenue) - 354.80));
} else if (baseRevenue <= 4464.68) {
  console.log (baseRevenue - ((0.2275 * baseRevenue) - 636.13));
} else {
  console.log (baseRevenue - ((0.275 * baseRevenue) - 869.36));
}













