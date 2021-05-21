const random = require('./exercise1');

test('mock function generateRandom', () => {
  random.generateRandom = jest.fn()
  .mockImplementation((a, b) => a / b)
  .mockReturnValue(10)

  expect(random.generateRandom(20, 2)).toEqual(10);
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
  expect(random.generateRandom()).toEqual(10);
  expect(random.generateRandom).toHaveBeenCalledTimes(2);
})