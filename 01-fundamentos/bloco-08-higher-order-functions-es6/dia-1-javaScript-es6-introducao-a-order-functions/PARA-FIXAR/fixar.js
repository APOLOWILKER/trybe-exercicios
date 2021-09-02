/* Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
*/


const wakeUp = () => 'Acordando!!'
const coffeMorning = () => 'Bora tomar café!!'
const sleepTime = () => 'Partiu dormir!!'
const doingThings = (func) => func();
// Ao chamar a função doingThings:
console.log(doingThings(wakeUp));
console.log(doingThings(coffeMorning));
console.log(doingThings(sleepTime));


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!