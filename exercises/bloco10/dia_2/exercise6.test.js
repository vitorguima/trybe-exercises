const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.name === name);
      if (animalFound) {
        return resolve(animalFound);
      };

      return reject('Nenhum animal com esse nome!');
    }, 200);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name);
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 200);
  })
);


const getAnimalByAge = (age) => {
  return findAnimalByAge(age);
};


describe('Testando promise - findAnimalByAge', () => {
  it('Quando existe animal com a idade procurada', () => {
    expect.assertions(1);
    return getAnimalByAge(1).then((animal) => {
      expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
    })
  });

  it('Quando não existe animal com a idade procurada', () => {
    expect.assertions(1);
    return getAnimalByAge(8).catch((error) => {
      expect(error).toEqual('Nenhum animal encontrado!');
    });
  })
})