const { encode, decode } = require('./encode.js');


describe('validações da função encode', () => {
  it('valida se encode e decode são funções', () => {
    expect([typeof(encode), typeof(decode)]).toEqual(['function', 'function'])
  });
  it('valida função encode: se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    let vogals = 'aeiou';
    let codedVogals = encode(vogals);
    expect(codedVogals).toEqual('12345');
  });
  it('valida função decode: se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u', () => {
    let numbers = '12345';
    let decodedNumbers = decode(numbers);
    expect(decodedNumbers).toEqual('aeiou');
  });
  it('valida função encode: se altera letras além das vogais a, e, i, o, u', () => {
    let falseTest = 'yvtgh';
    let codedFalseTest = encode(falseTest);
    expect(falseTest).toEqual(codedFalseTest);
  });
  it ('valida função decode: se altera números alem de 1, 2, 3, 4 e 5', () => {
    let falseTest = '67890';
    let decodedFalseTest = decode(falseTest);
    expect(falseTest).toEqual(decodedFalseTest);
  });
  it ('valida se a string retornada pela função encode tem o mesmo tamanho da string de input', () => {
    let vogals = 'aeiou';
    let codedVogals = encode(vogals);
    expect(codedVogals.length).toEqual(vogals.length);
  });
  it ('valida se a string retornada pela função decode tem o mesmo tamanho da string de input', () => {
    let numbers = '12345';
    let decodedNumbers = decode(numbers);
    expect(decodedNumbers.length).toEqual(numbers.length);
  });
})