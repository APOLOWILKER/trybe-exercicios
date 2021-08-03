// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(palavra){  
  let palindromo = palavra.split('').reverse().join('');
  if (palavra === palindromo) {
    return true;
  } else {
    return false;
  }
};
console.log(verificaPalindromo('desenvolvimento'));