/*
1 - Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
  a) A fórmula para calcular o IMC é peso / altura ^ 2 . Obs: Lembre-se que a altura é em metros,
  caso deseje usar em centímetros a conversão para metros será necessária.
  b) Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
  c) Por enquanto, não se preocupe em pedir input da pessoa usuária.
  Utilize valores fixos para peso e altura.
  d) Armazene o script no arquivo imc.js.
*/
const readline = require('readline-sync')

function IMC () {

  const peso = readline.questionFloat('Qual seu peso?');
  const altura = readline.questionInt('Qual sua altura?');
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso/ Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
  if( imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

IMC();
