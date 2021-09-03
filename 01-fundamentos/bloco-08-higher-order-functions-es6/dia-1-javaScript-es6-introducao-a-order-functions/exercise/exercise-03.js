// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// HOF ACEITA OUTRAS FUNÇÕES COMO PARAMETRO!!!
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const soma = (a, b) =>  a + b;
// const divisao = (a, b) =>  a / b;
// const multi = (a, b) =>  a * b;
// const subtra = (a, b) =>  a - b;

// const calculadora = (n1, n2, op) => console.log(arguments[1]);

// console.log(calculadora(10, 7, multi));
const checarResposta = (gabarito, resposta) => {
  let resultado  = 0;
  for (let index = 0; index < gabarito.length; index+= 1) {
    if ( gabarito[index] === resposta[index]) {
      resultado += 1;
    } else if (resposta[index] === 'N.A') {
      resultado -= 0.5
    }
  }
  return resultado;
}

 const chekarNotas = (gabarito, respostas, Callback) =>  Callback(gabarito, respostas);


console.log(chekarNotas(RIGHT_ANSWERS, STUDENT_ANSWERS, checarResposta));


