// exercício 1

// let n = 5
// let printScreen = []

// for (let index = 0; index < n; index += 1) {
//   printScreen += '*';
// }
// for (let index2 = 0; index2 < n; index2 += 1) {
//   console.log(printScreen);
// }


// // exercício 2

// let n = 5
// let printScreen = [];

// for (let index = 0; index < n; index += 1) {
//     printScreen += '*';
//     console.log(printScreen);
// }

// exercício 3


// let size = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = size;

// for (let lineIndex = 0; lineIndex < size; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine += ' ';
//     } else {
//       inputLine += symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// }

// exercício 4
// let size = 5;
// let symbol = '*';
// let inputLine = '';
// let midOfLine = (size + 1) / 2
// let rightPosition = (size + 1) / 2;
// let leftPosition = (size + 1) / 2;

// for (let lineIndex = 0; lineIndex <= midOfLine; lineIndex += 1) {
//   for (columnIndex = 0; columnIndex < size; columnIndex += 1) {
//     if (columnIndex > leftPosition && columnIndex < rightPosition) {
//       inputLine += symbol;
//     } else {
//       inputLine += ' ';
//     }
//   }

//   console.log(inputLine);
//   inputLine = ''
//   rightPosition += 1;
//   leftPosition -= 1;
// }


// exercicio 5

// meio-altura = 4
// meio-base = 4

let symbol = '*';
let emptySpace = ' ';
let n = 7;
let midPositionHeight = (n + 1) / 2;
let midPositionWidth = (n + 1) / 2;
let leftPosition = midPositionWidth;
let rightPosition = midPositionWidth;

// 1a linha:  '' '' '' * '' '' ''
// 2a linha:  '' '' *  '' * '' ''
// 3a linha:  '' *  '' '' '' * ''
// 4a linha:  *  *  *  *  *  *   *  

// esquerda para direita - 1a linha
// for (let index = 1; index <= midPositionHeight; index += 1) {
//   let printPyramid = '';
//   for (let index2 = 1; index2 <= n; index2 += 1){
//   if (index2 == leftPosition || index2 == rightPosition || index == midPositionHeight ) {
//     printPyramid += symbol;
//   } else {
//     printPyramid += emptySpace;
//   }
//   }
//   leftPosition -= 1;
//   rightPosition += 1;
//   console.log(printPyramid);
// }

// exercicio 6

