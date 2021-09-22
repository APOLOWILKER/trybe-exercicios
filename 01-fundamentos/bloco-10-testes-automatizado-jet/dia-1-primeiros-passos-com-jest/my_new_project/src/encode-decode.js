/**Para as funções encode e decode crie os seguintes testes:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

// Desafio 9
function encode(vogaisString) {
  let novaString = '';
  for(let index in vogaisString) {
      switch (vogaisString[index]) {
        case 'a': 
        novaString += '1';       
          break;
        case 'e': 
          novaString += '2'; 
          break;
        case 'i':
          novaString += '3'; 
          break;
        case 'o':
          novaString += '4'
          break;
        case 'u': 
          novaString += '5'
          break;
        default:
          novaString += vogaisString[index];
          break;
      }
  } return novaString;
}

function decode(numero) {
  let novoNumero = '';
  for(let index in numero) {
      switch (numero[index]) {
        case '1': 
        novoNumero += 'a';       
          break;
        case '2': 
          novoNumero += 'e'; 
          break;
        case '3':
          novoNumero += 'i'; 
          break;
        case '4':
          novoNumero += 'o'
          break;
        case '5': 
          novoNumero += 'u'
          break;
        default:
          novoNumero += numero[index];
          break;
      }
    }
    return novoNumero;
}

module.exports = {
  decode,
  encode,
};
