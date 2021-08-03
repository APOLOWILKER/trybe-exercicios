// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayInteiro = [2, 6, 7, 10, 1];

function maiorValor (array) {
  let indiceMaior = 1;
  for (let index in array) {
    if(array[indiceMaior] > array[index]){
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(maiorValor(arrayInteiro));