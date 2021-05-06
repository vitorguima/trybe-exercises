// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // console.log(saudacoes[1](saudacoes[0])); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [saudacao, retornasaudacao] = saudacoes;

// // console.log(saudacao);
// // console.log(retornasaudacao(saudacao));

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const random = ['arroz', 'gato', 'água'];
[comida, animal, bebida] = random;

console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[, , ,...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12]

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

