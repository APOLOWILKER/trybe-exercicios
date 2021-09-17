// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

const myPromise = new Promise((resolve, reject) => {
  let myArray = [];
  for (let index = 0; index < 10; index += 1) {
    let num = Math.floor(Math.random() * 51)
    myArray.push(num);
  }
  let sum = myArray.map(num => num * num).reduce((acumulador, corrente) => acumulador + corrente, 0);
  if ( sum < 8000 ) {
    const array = [2, 3, 5, 10]
    resolve(array.map((elemento) => Math.floor(sum / elemento)))
  } else {
    reject('Promise rejeitada')
  }
}).then(resolve => console.log(resolve))
.catch(reject => console.log(reject))
