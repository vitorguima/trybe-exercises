const functions = require('./exercise4.js');

test('mock função que recebe string e transforma em caixa alta', () => {
  functions.toUpper = jest.fn()
    .mockImplementation((string) => string.toLowerCase());

  expect(functions.toUpper('ABC')).toEqual('abc');
  expect(functions.toUpper).toHaveBeenCalledTimes(1);
  expect(functions.toUpper).toHaveBeenCalledWith('ABC');
});

test('mock função que recebe string e transforma em caixa alta', () => {
  functions.toUpper.mockReset();

  functions.toUpper = jest.fn()
    .mockImplementation((string) => string.toUpperCase());

  expect(functions.toUpper('abc')).toEqual('ABC');
  expect(functions.toUpper).toHaveBeenCalledTimes(1);
  expect(functions.toUpper).toHaveBeenCalledWith('abc');
});