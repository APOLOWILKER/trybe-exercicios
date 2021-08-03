// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


let teste = [2, 3, 2, 5, 8, 2, 3, 3, 3, 3, 3];

function repeteInteiro (inteiro) {
  let contRepetido = 0;
  let repeat = 0;
  let NumeroRepetido = 0;
  for (let index in inteiro) {
    let verificaNumero = inteiro[index]
    for (let index2 in inteiro) {
      if (verificaNumero === inteiro[index2]) {
        repeat += 1;
      }
    }
    if (repeat > contRepetido) {
      contRepetido = repeat;
      NumeroRepetido = inteiro[index];
    }
    repeat = 0;
}
  return NumeroRepetido;
}

console.log(repeteInteiro(teste));


