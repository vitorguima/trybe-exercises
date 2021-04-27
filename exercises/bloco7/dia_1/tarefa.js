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

const fiveSkills = ['JS', 'CSS', 'HTML', 'SQL', 'PBI'];

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

const showSkills = (string) => {
  const intro = 'Minhas cinco principais habilidades são:';
  let skills = fiveSkills.join(', ')

  return `${string} ${intro} ${skills}`;
}

console.log(showSkills(changeCharacter('Tryber x aqui!', 'Vitor')));