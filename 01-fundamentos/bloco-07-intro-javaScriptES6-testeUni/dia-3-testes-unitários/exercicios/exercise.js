// PRATICANDO A INPLEMENTAÇÃO DE TESTES

/* 1 -   A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');//trata exceções, mas pq o new? Pq ele vai enviar essa msg como erro.
  }

  return a + b;
}

// implemente seus testes aqui
assert.equal(sum(4, 5), 9);
assert.equal(sum(0,0), 0);
assert.throws(() => {
  sum(4, "5");
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);