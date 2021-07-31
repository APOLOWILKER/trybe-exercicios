// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.


let n = 5
let asterisco = " * ";
let recebeSimbolo = "";


for (index = 0; index < n; index += 1){ 
   recebeSimbolo = recebeSimbolo + asterisco;  /*ou recebeSimbolo += asterisco */
   console.log(recebeSimbolo)
}