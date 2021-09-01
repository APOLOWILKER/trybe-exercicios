// EXERCICIO
/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 - Verifique se o array passado por parâmetro não sofreu alterações
4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado  */

const assert = require('assert');

function myRemove(arr, item) {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
const arrayN = [1, 2, 3, 4];
// implemente seus testes aqui
const test = myRemove(arrayN, 3);
assert.strictEqual(test.length, 3);
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(test, [1, 2, 3, 4]);
// 3 - verifique se o array passado por parâmetro não sofreu alterações.
assert.deepStrictEqual(arrayN,[1, 2, 3, 4]);

// 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);