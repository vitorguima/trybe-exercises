const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addMorningTurn = (object, key, value) => {
  const newKey = key;
  const newValue = value;
  object[newKey] = newValue;
}

addMorningTurn(lesson2, 'turno', 'manhã');

// console.log(lesson2);

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => Object.keys(object);

// console.log(listKeys(lesson3));

// 3 Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (object) => Object.keys(object).length;

// console.log(objectSize(lesson1));

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (object) => Object.values(object);

// console.log(objectValues(lesson2))

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const objectLesson1 = {lesson1};
const objectLesson2 = {lesson2};
const objectLesson3 = {lesson3};


const allLessons = Object.assign({}, objectLesson1, objectLesson2, objectLesson3);

// console.log(allLessons);


// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (object) => {
  const valuesArray = Object.values(object);
  const keysArray = Object.keys(valuesArray);
  let totalStudents = 0;

  // racional usado para entender como criar a função
  // console.log(keysArray);
  // const value1 = valuesArray[0];
  // console.log(value1['numeroEstudantes']);
  // console.log(value1['numeroEstudantes']);

  for (index in keysArray) {
    let value = valuesArray[index];
    let sumStudent = value['numeroEstudantes'];

    totalStudents += sumStudent;
  }
  
  return totalStudents;
}

totalStudents(allLessons);