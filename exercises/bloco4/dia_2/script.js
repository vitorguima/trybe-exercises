let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

// console.log('o resultado é ' + result);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let result = 0;
let median = result / numbers.length

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

if (median > 20); {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}


// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

