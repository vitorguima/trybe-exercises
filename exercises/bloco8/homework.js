// exercicio 1: 

const firstClass = (fullName) => {
  return {
    nomeCompleto: fullName,
    email: `${fullName.toLowerCase().replace(' ', '_')}@trybe.com`,
  };
}

const newEmployees = () => {
  const employees = {
    id1: firstClass('Pedro Guerra'),
    id2: firstClass('Luiza Drumond'),
    id3: firstClass('Carla Paiva'),
  }
  return employees;
};

// console.log(newEmployees());

// exercicio 2:
const checkRandomNumber = (number, randomNumber) => {
  if (number === randomNumber) {
    return 'Parabéns, você ganhou';
  } return 'Tente novamente;'
};

const loteryRoutine = (number) => {
  const randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber)
  return checkRandomNumber(number, randomNumber);
}

console.log(loteryRoutine(2));


