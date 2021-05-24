const jokes = require('./exercise7.js');

describe('testes mock para validação da função fetchJoke', () => {
  jokes.fetchJoke = jest.fn();
  afterEach(() => jokes.fetchJoke.mockReset);

  it('valida retorno resolve da função', () => {
    jokes.fetchJoke
    .mockResolvedValue({
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    });

    expect(jokes.fetchJoke()).resolves.toEqual({
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    });
    expect(jokes.fetchJoke).toHaveBeenCalledTimes(1);
  })
})