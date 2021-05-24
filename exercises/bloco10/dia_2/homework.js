const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('verifica se a palavra retornada é toda em maiúscula', () => {
  uppercase('test', (str) => {
    expect(str).toEqual('TEST');
  });
});
