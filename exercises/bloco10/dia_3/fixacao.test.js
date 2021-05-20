const math = require('./math.js');

// test('mock função subtrair e chamada', () => {
//   math.subtrair = jest.fn()
//   .mockImplementation((a, b) => a - b);
  
//   expect(math.subtrair(2, 1)).toEqual(1);
//   expect(math.subtrair).toHaveBeenCalledTimes(1);
// });

test('mock função multiplicar', () => {
  math.multiplicar = jest.fn()
  .mockReturnValue(7)

  expect(math.multiplicar(1)).toEqual(7);
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
});

test('mock função somar', () => {
  math.somar = jest.fn()
  .mockImplementation((a, b) => a + b);

  expect(math.somar(2, 1)).toEqual(3);
  expect(math.somar).toHaveBeenCalledTimes(1);
})

test('mock função dividir', () => {
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5)

  expect(math.dividir(1, 2)).toEqual(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir(1, 2)).toEqual(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir(1, 2)).toEqual(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);
})

test('mock função subtrair', () => {
  const subtrairSpied = jest.spyOn(math, 'subtrair');

  subtrairSpied
  .mockReturnValueOnce(20);

  expect(subtrairSpied(2, 1)).toEqual(20);
  expect(subtrairSpied).toHaveBeenCalledTimes(1);
  expect(subtrairSpied(2, 1)).toEqual(1);
  expect(subtrairSpied).toHaveBeenCalledTimes(2);
})