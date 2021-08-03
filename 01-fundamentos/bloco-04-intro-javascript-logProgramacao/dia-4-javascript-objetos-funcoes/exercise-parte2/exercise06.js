//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaNumero (numeros) {
  let total = 0;
  for(let index = 0; index <= numeros; index += 1) {
    total += index;
  }
  return total;
}
console.log(somaNumero(10));