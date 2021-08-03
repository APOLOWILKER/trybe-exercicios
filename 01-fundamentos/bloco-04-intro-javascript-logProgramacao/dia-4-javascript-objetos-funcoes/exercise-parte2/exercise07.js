// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false;

function verificaFimPalavra (word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (var index = 0; index < word.length; index+= 1) {
    if (word[word.length- ending.length + index] !== ending[index]) {
      control = false;
    }
  }
  return control;
} 

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false