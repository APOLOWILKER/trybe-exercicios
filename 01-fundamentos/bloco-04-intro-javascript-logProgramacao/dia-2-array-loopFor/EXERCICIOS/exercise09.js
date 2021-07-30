// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = [];
const MAX_LENGTH = 25;

for (let index = 1; index <= MAX_LENGTH; index += 1) {
  contador.push(index / 2)
}
console.log(contador);