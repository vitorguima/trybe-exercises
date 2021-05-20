function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  return array.sort().map((element) => ({ 
    tech: element,
    name: nome,
  }))
}

module.exports = techList;