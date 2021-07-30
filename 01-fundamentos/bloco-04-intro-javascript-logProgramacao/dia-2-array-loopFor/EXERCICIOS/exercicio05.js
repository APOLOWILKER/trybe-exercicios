// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
  if(maiorNumero < numbers[index]){
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero);
