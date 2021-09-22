const { decode, encode } = require('../src/encode-decode.js');

describe('Para as funções encode e decode crie os seguintes testes:', () => {
  it('Teste se encode e decode são funções;', () => {
    expect({decode, encode}).toBeDefined();
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(decode('H4w 1r2 y45 t4d1y?')).toEqual('How are you today?');
    expect(encode('How are you today?')).toEqual('H4w 1r2 y45 t4d1y?');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('apolo').length).toEqual(5);
    expect(decode('1p4l4').length).toEqual(5);
  });
});