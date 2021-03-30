// exercicio 7 pt - 2
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifyWordFinal (word, ending) {
  let wordVerify = false;
  if (word[word.length - 2] + word[word.length - 1] == ending) {
    wordVerify = true;
  } else {
    wordVerify = false;
  }
  return wordVerify;
}

console.log(verifyWordFinal('trybe','be'))