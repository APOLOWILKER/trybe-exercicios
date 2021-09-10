// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// valorAcumulador value e o meu array
// valorArray é a minha matriz.

function flatten() {
  return arrays.reduce((valorAcumulador, valorArray) => valorAcumulador.concat(valorArray), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);