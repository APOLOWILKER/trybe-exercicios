const readline = require('readline-sync');

function velocidade () {

  const distancia = readline.questionInt('Qual a distanca?');
  const tempo = readline.questionInt('Qual o tempo?');
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

velocidade();