const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const stringOrder = oddsAndEvens.sort((a, b) =>  a-b);

console.log(`Os números ${stringOrder} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// function orderFunction(a, b) {
//   return a-b;
// }; // modo sem arrow function

// console.log(oddsAndEvens.sort(orderFunction));


/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo. */


// var numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);