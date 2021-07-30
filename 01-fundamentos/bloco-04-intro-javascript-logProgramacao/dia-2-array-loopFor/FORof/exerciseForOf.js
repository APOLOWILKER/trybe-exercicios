// EXEMPLO


let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

// O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//om o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
}