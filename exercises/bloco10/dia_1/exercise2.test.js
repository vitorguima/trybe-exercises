const myRemove = require('./exercise2');

describe('Valida se o array retornado como cópia do parâmetro está de acordo', () => {
  it('verifica se myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado por parâmetro não sofreu alterações', 
  () => {
    const arrayToTest = [1, 2, 3, 4];
    const testedArray = myRemove(arrayToTest, 3);
    expect(arrayToTest).toEqual([1, 2, 3, 4]);
  });
  it('Verifica se myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
