// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise

const myPromise = new Promise((resolve, reject) => {
  let myArray = [];
  for (let index = 0; index < 10; index += 1) {
    let num = Math.floor(Math.random() * 51)
    myArray.push(num);
  }
  let sum = myArray.map(num => num * num).reduce((acumulador, corrente) => acumulador + corrente, 0);
  if ( sum < 8000 ) {
    resolve('Promisse resolvida')
  } else {
    reject('Promise rejeitada')
  }
}).then(resolve => console.log(resolve))
.catch(reject => console.log(reject))

