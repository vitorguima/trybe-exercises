// parte 1

// 1 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

const testingScope = escopo => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 2 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedArray = (array) => `Os números ${array.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`;

console.log(sortedArray(oddsAndEvens));

// parte 2
// 1 Crie uma função que receba um número e retorne seu fatorial.

const returnFactorial = (number) => {
  let factorial = 1;
  for (let index = 1; index <= number; index += 1) {
    factorial *= index;
  }
  console.log(factorial);
}

// 2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const returnBiggestWord = (phrase) => {
  let wordsArray = phrase.split(' ');
  let maxLength = 0;
  let biggestWord = '';

  for (let index = 0; index < wordsArray.length; index += 1) {
    let possibleWord = wordsArray[index];

    if (possibleWord.length > maxLength) { 
      biggestWord = possibleWord;
      maxLength = possibleWord.length;
    }
  }
  return biggestWord;
}

console.log(returnBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));