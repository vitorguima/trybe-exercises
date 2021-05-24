// exemplos filter

// exemplo 1
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

// // exemplo 2

// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
// );

// console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// // exemplo 3
// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//    listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]


// exemplos map

// exemplo 1
// diferença entre utilizar map e for
// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// exemplo 2
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ] 

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = [];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > 0) {
//     negativeNumbers.push(numbers[index] * -1);
//   } else {
//     negativeNumbers.push(numbers[index]);
//   }
// }

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// exemplo 3

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const prodPrice = (products, prices) => {
//   return products.map((product, index) => ({ [product]: prices[index] }));
// }

// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
//   { [product]: listPrices[index] }
// ));


// console.log(prodPrice(products, prices));

// exemplo 4
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const allNameStudents = [];

// for (let index = 0; index < estudantes.length; index += 1 ) {
//   if(estudantes[index].turno === 'Manhã') {
//     allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//   }
// }

// console.log(allNameStudents);

const allNameStudents = (array) => {
  return array.filter((student) => (student.turno === 'Manhã')).map((student) => `${student.nome} ${student.sobrenome}`);
}

// console.log(allNameStudents(estudantes));

const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].nome === name) {
      return students[index];
    }
  }
};

// const reportStatus = (name, students) => {
//   const getStudent = findStudent(name, students);
//   const report = [];
//   for (let index = 0; index < getStudent.materias.length; index += 1) {
//     if (getStudent.materias[index].nota >= 60) {
//       report.push(`${getStudent.materias[index].name} Aprovado`);
//     } else {
//       report.push(`${getStudent.materias[index].name} Reprovado`);
//     }
//   }
//   return report;
// };

// console.log(reportStatus('Natalia', estudantes));

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (`${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado' }`));
};


console.log(reportStatus('Natalia', estudantes))