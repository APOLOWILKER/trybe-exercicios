//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function maisCaracteres (string) {
  let maiorString = 0;
  for (let index in string) {
    if(string[maiorString] > string[index]){
      maiorString = teste[index];
    }
  }
  return maiorString;
}

console.log(maisCaracteres(teste));