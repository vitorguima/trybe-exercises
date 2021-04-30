// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const firstClass = () => console.log('Acordando!!');

// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const secondFirstClass = () => console.log('Bora tomar café!!');

// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const thirdFirstClass = () => console.log('Partiu Dormir!!');

// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:

const doinThings = (param) => {
  if (param === 'wakeup') {
    firstClass();
  } else if (param === 'wakeup2') {
    secondFirstClass();
  } else {
    thirdFirstClass();
  }
}

doinThings('wakeup2');