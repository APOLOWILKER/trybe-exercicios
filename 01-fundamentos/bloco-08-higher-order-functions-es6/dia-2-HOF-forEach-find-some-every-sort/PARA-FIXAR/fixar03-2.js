// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const ageAval = arr.every((person) => person.age >= minimumAge);
  function result () {
    if (ageAval === true) {
    `Pode tocar o som `
    } else {
    `Existem menores de idade na sua festa`
    }
    // co0mo imprimir isso??
  }
  return ageAval;
}

console.log(verifyAges(people, 18));