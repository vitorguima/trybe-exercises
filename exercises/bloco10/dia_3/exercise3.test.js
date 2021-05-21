const random = require('./exercise1');

test('mock function generateRandom spy 1', () => {
  random.generateRandom = jest.fn()
  .mockImplementation((a, b, c) => a * b * c)

  expect(random.generateRandom(2, 2, 2)).toEqual(8);
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
  expect(random.generateRandom).toHaveBeenCalledWith(2, 2, 2);
})

test('mock function generateRandom spy 2', () => {
  random.generateRandom.mockReset();
  expect(random.generateRandom).toHaveBeenCalledTimes(0);
  
  random.generateRandom = jest.fn()
  .mockImplementation((a) => a * 2);

  expect(random.generateRandom(20)).toEqual(40);
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
  expect(random.generateRandom).toHaveBeenCalledWith(20);
})