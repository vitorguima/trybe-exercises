const functions = require('./exercise4.js');

jest.mock('./exercise4.js');

describe('teste mock funções criadas no exercício 4', () => {
  test('mock função que recebe string e transforma em caixa alta', () => {
    functions.toUpper
      .mockImplementation((string) => string.toLowerCase());

    expect(functions.toUpper('ABC')).toEqual('abc');
    expect(functions.toUpper).toHaveBeenCalledTimes(1);
    expect(functions.toUpper).toHaveBeenCalledWith('ABC');
  });
  test('teste mock função que recebe string e retorna primeira letra', () => {
    functions.firstChar
      .mockImplementation((string) => string[string.length - 1]);
    expect(functions.firstChar('ABC')).toEqual('C');
    expect(functions.firstChar).toHaveBeenCalledTimes(1);
    expect(functions.firstChar).toHaveBeenCalledWith('ABC');
  });
  test('teste mock função que recebe 3 strings e as retorna concatenadas', () => {
    functions.concatString
      .mockImplementation((a, b, c) => `${a}${b}${c}`);
    expect(functions.concatString('A', 'B', 'C')).toEqual('ABC');
    expect(functions.concatString).toHaveBeenCalledTimes(1);
    expect(functions.concatString).toHaveBeenCalledWith('A', 'B', 'C');
  })
})



