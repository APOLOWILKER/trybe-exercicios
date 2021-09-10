const assert = require('assert');

const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {

  return books.reduce((acumulador, elementoAtual, index, array) => {
    if (array.length - 1 === index) {
      acumulador += elementoAtual.author.name + '.'
      console.log(acumulador)
    } else {
      acumulador += elementoAtual.author.name + ', '
      console.log(acumulador)
    }
  return acumulador  }, '');

  // let result = '';
  // for(let index = 0; index < books.length; index += 1) {
  //   if(books.length - 1 === index) {
  //     result += books[index].author.name + '.'
  //     console.log(result)
  //   } else {
  //   result += books[index].author.name + ', '
  //   console.log(result)  
  //   } 
  // }
  // return result
}

assert.strictEqual(reduceNames(), expectedResult);