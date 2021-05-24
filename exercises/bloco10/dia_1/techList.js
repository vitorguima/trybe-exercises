function techList(array, nome) {
  return array.length === 0 ? 'Vazio!' : array.sort().map((element) => ({ tech: element, name: nome, }))
}

module.exports = techList;