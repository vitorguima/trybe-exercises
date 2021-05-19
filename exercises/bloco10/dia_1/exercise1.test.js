const sum = require('./exercise1');

describe('Valida somas da funcao functionA', () => {
  it('retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('retorno de sum(0,0) é 0', () => {
    expect(0).toEqual(sum(0, 0));
  });
  it('retorna erro se recebe parâmetro string', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it('mensagem de erro para parâmetro string é: parameters must be numbers', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});