const readline = require('readline-sync');

function sorteando () {
  const numero = readline.questionInt('Qual o numero? ');
  const sorteio = Math.floor(Math.random() * 10 + 1);
  console.log(numero)
  console.log(sorteio)
}

sorteando();