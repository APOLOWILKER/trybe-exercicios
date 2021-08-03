//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let teste = ['José', 'Lucas', 'Nádia', 'Fernandos', 'Cairo', 'Joana', 'Fernandas', 'zico', 'Zico', 'álvo']; 

function maisCaracteres (listName) {
  let indiceMaiorString = 0;
  for (let index in listName) {
    if(listName[indiceMaiorString] <= listName[index]) {
      indiceMaiorString = index;
    }
  }
  return listName[indiceMaiorString];
}

console.log(maisCaracteres(teste));