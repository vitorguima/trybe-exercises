// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

// parte 1 - adicionando chaves e valores
const aluno = {};

const returnObject = (object, keyName, keyValue) => {
  const key = keyName;
  const value = keyValue;
  
  object[key] = value;

  return object;
}

console.log(returnObject(aluno,'formacao', 'administração'));


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;


// parte 2 - Object.keys

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(Object.keys(customer));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const returnSkills = (object) => {
  const arrayOfSkills = Object.keys(object);
  console.log(arrayOfSkills);
  console.log(arrayOfSkills[0])
  console.log(arrayOfSkills[1])
  console.log(arrayOfSkills[2])
  console.log(arrayOfSkills[3])
  console.log(object[arrayOfSkills[1]])

  for (key in arrayOfSkills) {
    console.log(`Nome da habilidade: ${arrayOfSkills[key]}, Nível: ${object[arrayOfSkills[key]]}`);
  }
}

console.log(returnSkills(student1));

// parte 3 - Object.values

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

// parte 4 - Object.entries

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};


// parte 5 - Object.assign

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family);
console.log(person)

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }


// clone.name = 'Vitor';

// console.log(clone);
// console.log(person);

const clone2 = Object.assign({}, person, lastName);

clone2.name = 'Vitor';

console.log(clone2);
console.log(person);