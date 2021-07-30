// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddValue = 0;

for (let index = 1; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    oddValue += 1;
  }
}

if (oddValue === 0){
  console.log('nenhum valor impar encontrado');
} else {
  console.log(oddValue);
}