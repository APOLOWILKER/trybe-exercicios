// for/in - madeira mais dinamica de criar um for.
/* muito utilizado em objetos */

// mostrando as marcar dos carros (valores);
// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]); // assim eu mostro chaves e valores. o [index] e o que mostra os valores, e o nome do objeto;
// }

// Um outro exemplo é a iteração nas chaves de um objeto:

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }


// diferença for/in e for/of - O For/in irá percorrer a propriedade declarada, e não o seu valor em si. - o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in .
// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//   console.log(position);
// };
//resultado: 0, 1, 2;

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;


//PRATICANDO
// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

 for (let value in names) {
   console.log('Olá, ' + value + ': ' + names[value]);
 }

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index of car) {
  console.log(index + ':  ' + car[index]);
}




