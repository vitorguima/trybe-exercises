const getDogs = require('./exercise6.js');

describe('testando a requisicao realizada pela função fetchDogs', () => {
  test('mock para a requisicao resolvida', async () => {
    getDogs.fetchDogs = jest.fn()
    .mockResolvedValue('request success');
  
    expect(getDogs.fetchDogs()).resolves.toBe('request success');
    expect(getDogs.fetchDogs).toHaveBeenCalledTimes(1);
  })

  test('mock para a requisicao resolvida', async () => {
    getDogs.fetchDogs.mockReset;
    getDogs.fetchDogs.mockRejectedValue('request failed');

    expect(getDogs.fetchDogs()).rejects.toBe('request failed')
    expect(getDogs.fetchDogs).toHaveBeenCalledTimes(2);
  })
})