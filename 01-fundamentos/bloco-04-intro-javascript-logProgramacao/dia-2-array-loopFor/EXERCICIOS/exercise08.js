// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = [];
const MAX_LENGTH = 25;

for (let index = 1; index <= MAX_LENGTH; index += 1) {
  contador.push(index)
}
console.log(contador);