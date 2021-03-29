// // prática aula
// // Objetos

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
//     bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
// };

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' veses.')

// console.log ('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')


// for/in

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   } 

// for (let index in names) {
//     console.log(index, names[index]);
// }

// let carro = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   }

//   for (let index in carro) {
//       console.log(index, carro[index])
//   }


  function triangle(n) {
    if (n % 2 === 0) throw new Error('not an odd number');
    
    let t = [];
    let numberOfRows = Math.ceil((n / 2));
    let middleChar = Math.floor((n / 2));
    
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      let rowTemplate = new Array(n).fill(' ');
      let rowOffsetFromBase = numberOfRows - rowIndex;
      
      if (rowIndex === 0 /* is top */) {
          t[rowIndex] = new Array(n).fill(' ')
          t[rowIndex][middleChar] = '*'
      } else if (rowIndex === (numberOfRows - 1) /* is base */) {
          t[rowIndex] = new Array(n).fill('*');
      } else {
          // is middle rows
          let headIndex =  middleChar - rowIndex;
          let tailIndex =  middleChar + rowIndex;
      
          t[rowIndex] = new Array(n).fill(' ');
          t[rowIndex][headIndex] = '*'
          t[rowIndex][tailIndex] = '*'
      }
      
      t[rowIndex] = t[rowIndex].join('');
    }
    
    return t.join('\n');
  }
  
  console.log(triangle(7));
