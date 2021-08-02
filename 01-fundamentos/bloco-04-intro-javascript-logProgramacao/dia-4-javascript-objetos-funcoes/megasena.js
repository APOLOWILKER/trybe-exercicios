// gerar um numero aleatório
function generateRandomNumber (){
  return Math.floor(Math.random() * 60 +1);
} 

function generateGame() {
  let megaSenaNumbers = [];
  // precisamos sortear 6 numeros
  for (let index = 0; index < 6; index += 1) {
    let randomNumber = generateRandomNumber();
    // colocar o número dentro do array
    megaSenaNumbers.push(randomNumber);
  }
  return megaSenaNumbers;
}

console.log( 'jogo gerado na Função ' + generateGame());

// conferir os acertos:
function checkMegaSena(result, game) {
  let numberOfHits = 0;
  
  // Conferencia do jogo:
  for (let index =0; index < game.length; index+= 1) {
    let playNumber = game[index];
      for( let indexMega = 0; indexMega < result.length; indexMega += 1 ) {
        let megaNumber = result[indexMega];
        if (playNumber === megaNumber) {
            numberOfHits += 1;
        }
      }
  }
  return numberOfHits;
}


//  criar meu jogo

let myGame = [7, 15, 28, 42, 56, 58];

// Sortear os números da Mega Sena:



// let firstNumber = generateRandomNumber();
// let secondNumber = generateRandomNumber();
// let thirdNumber = generateRandomNumber();
// let fourthNumber = generateRandomNumber();
// let fifthNumber = generateRandomNumber();
// let sixthNumber = generateRandomNumber();

// let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let numberofHtis = 0;



console.log('Mega Sena: ' + generateGame());
console.log('Meu jogo: ' + myGame);
console.log('Acertos: ' + checkMegaSena(), myGame);
console.log('Acertos: ' + checkMega)
