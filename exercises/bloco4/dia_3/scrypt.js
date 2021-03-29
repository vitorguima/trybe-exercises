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


// exercío 5

// let n = 7;
// let symbol = '*';
// let printScreen = '';

// let midOfLine = (n + 1) / 2;
// let leftPosition = midOfLine;
// let rightPosition = midOfLine;

// for (let index = 0; index <= midOfLine; index += 1) {
//   for (let index2 = 0; index2 < n; index2 += 1) {
//     if (index2 > leftPosition && index2 < rightPosition ) {
//       printScreen += symbol;
//     } else if (index2 < leftPosition && index2 > rightPosition {
//       printScreen += 
//     }
//     }
//   }
//   console.log(printScreen);
//   printScreen = '';
//   leftPosition += 1;
//   rightPosition -= 1;
// }




let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};