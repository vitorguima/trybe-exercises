// exercícios parte 2

const pCounter = document.querySelector('.click-counter');
const clickButton = document.querySelector('.click-test')

// exercício 3
const sumClicks = () => {
  let totalOfClicks = 0;

  clickButton.addEventListener('click', () => {
    totalOfClicks += 1;
    pCounter.innerText = totalOfClicks;
  })
}

window.onload = function start() {
  sumClicks();
}


// exercício 4
const changeCharacter = (string, name) => {
  const stringArray = string.split(' ');
  let finalPhrase = [];

  for (word of stringArray) {
    if (word === 'x') {
      word = name;
    }
    finalPhrase.push(`${word}`);
  }
  return finalPhrase.join(' ');
}


console.log(changeCharacter('Tryber x aqui!', 'Vitor'));

