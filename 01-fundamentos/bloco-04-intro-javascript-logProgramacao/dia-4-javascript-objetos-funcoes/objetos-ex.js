//exemplos material 

// let car = 'Fiat'; //variavel

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// }; //objeto;


let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {gold: 2, silver: 3},
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

/* notação por ponto = console.log (player.name)*/
/*notação por  colchetes console.log(player['name']); ou uso player['fullName'] = 'Marta Silva'; Se o valor colocado não existe a propriedade será criado o valor, se já existe o valor da propriedade sera sobrescrito. ---  Posso criar um array também player.lastName ['Silva', 'Santos']; */

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos.');

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log( 'A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata". 

console.log('A jogadora possui ' + player.medals.gold + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.' );