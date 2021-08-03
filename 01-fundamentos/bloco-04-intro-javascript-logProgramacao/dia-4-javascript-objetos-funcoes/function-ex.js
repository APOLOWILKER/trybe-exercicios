// Função seria um agrupador de código. As funções são reutilizaveis.

// function greet(name, age) {
//   console.log('Ola, ' + name + ' . Você possui  ' + age + ' anos.');
// }

// greet( 'Apolo', 28);

// function makeGreet(name, age) {
//   return 'Ola, ' + name + ' . Você possui  ' + age + ' anos.';
// }

// console.log(makeGreet('Apolo', 28));

// let number1 = 30;
// let number2 = 20;

// console.log(number1 +  number2);
// function sum(number1, number2){
//   return number1 + number2;
// }
// console.log(sum(60,25))


// Que tal praticar um pouco? Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo: O programa...

// 01 REFATORANDO
let a = 5;
let b = 8;

// ADIÇÃO

a+b
console.log(a+b);

function sum(a,b) {
  return a+b;
}
console.log(sum(a,b));


// SUBTRAÇÃO

a-b
console.log(a-b);

function dim(a,b) {
  return a-b;
}
console.log(dim(a,b));

// MUTIPLICAÇÃO

console.log(a*b);
function mult(a,b) {
  return a*b;
}
console.log(mult(a,b));

// DIVISÃO

console.log(a/b);
function div(a,b) {
  return a/b
}
console.log(div(a,b));

// MODULO

console.log(a%b);
function rest(a,b) {
  return a%b
}
console.log(rest(a,b));

//exercicio 02

let a = 35;
let b = 88;

if (a > b) {
  console.log("number a maior");
}
else {
  console.log("number b maior");
}

function maiornumero(a,b) {
  if (a > b) {
    return "number a maior";
  }
  else {
    return "number b maior";
  }
}






