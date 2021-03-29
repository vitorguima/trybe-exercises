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


let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex < size; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}



