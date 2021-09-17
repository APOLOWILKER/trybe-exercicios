// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

const myPromise = new Promise((resolve, reject) => {
  let myArray = [];
  for (let index = 0; index < 10; index += 1) {
    let num = Math.floor(Math.random() * 51)
    myArray.push(num);
  }
  let sum = myArray.reduce((acumulador, corrente) => acumulador + corrente, 0);
  if ( sum < 80) {
    const array = [2, 3, 5, 10]
    resolve(array.map((elemento) => Math.floor(sum / elemento)))
  } else {
    reject("O poder do miseravél e de mais de oito mil! Essa promise deve estar quebrada!")
  }
}).then(resolve => console.log(resolve))
.catch(reject => console.log(reject))
