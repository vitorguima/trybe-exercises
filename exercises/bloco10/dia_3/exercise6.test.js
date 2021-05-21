const getDogs = require('./exercise6.js');

describe('testando a requisicao realizada pela função fetchDogs', () => {
  test('mock para a requisicao resolvida', async () => {
    getDogs.fetchDogs = jest.fn()
    .mockResolvedValueOnce('request success')
    .mockRejectedValueOnce('request failed')

    await getDogs.fetchDogs();
    expect(getDogs.fetchDogs()).toEqual('request success');
    expect(getDogs.fetchDogs()).toHaveBeenCalledTimes(1);
    await getDogs.fetchDogs();
    expect(getDogs.fetchDogs()).toEqual('request failed');
    expect(getDogs.fetchDogs()).toHaveBeenCalledTimes(2);
  })
})