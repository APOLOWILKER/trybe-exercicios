// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumuladorACC, elementoAtualCURR) => 
  acumuladorACC + elementoAtualCURR.split('').reduce((acumulador, current) => {
      return (current === 'a' || current === 'A') ? acumulador + 1 :  acumulador;
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20); 