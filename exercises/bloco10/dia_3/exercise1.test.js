const random = require('./exercise1');

test('mock function generateRandom', () => {
  random.generateRandom = jest.fn()
  .mockReturnValue(10);

  expect(random.generateRandom()).toEqual(10);
  expect(random.generateRandom).toHaveBeenCalledTimes(1);
})