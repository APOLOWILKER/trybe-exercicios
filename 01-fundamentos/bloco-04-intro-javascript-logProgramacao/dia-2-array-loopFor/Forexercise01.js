//  Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index+= 1) {
//   console.log(groceryList[index]);
// }

// criar um array vazio; 
// fazer um for que conte de 1 a 25;
// pegar o valor do for e armazenar no array vazio;
// imprimir o array vazio; 

let contador = [];

for (let index = 1; index <= 25; index += 1) {
  contador.push(index)
}
console.log(contador);


// exercicio 9

let contador = [];

for (let index = 1; index <= 25; index += 1) {
  contador.push(index / 2)
}
console.log(contador);