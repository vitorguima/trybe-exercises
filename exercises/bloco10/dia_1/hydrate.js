const hydrate = (string) => {
  const sumGlasses = string.split('').map((element) => parseInt(element, 10)).filter((element) => element > 0).reduce((a,b) => a + b);
  return sumGlasses > 1 ? `${sumGlasses} copos de água` : `${sumGlasses} copo de água`;
}

module.exports = hydrate;