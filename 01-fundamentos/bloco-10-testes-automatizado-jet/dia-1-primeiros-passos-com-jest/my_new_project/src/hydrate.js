/* A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo: */

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

// function hydrate(drinkCups) {
//   let soma = 0;

//   for (let index in drinkCups) {
//     if (parseInt(drinkCups[index])){
//       soma += parseInt(drinkCups[index]);
//     }
//   }
//   if (soma === 1){
//     return soma + " copo de água";
//   }
//   return soma + " copos de água";
// }

const hydrate = (str) => {
    const strSplited = str.split(' ');
    const result = strSplited.filter((value) => parseInt(value)).reduce((acc, elem) => acc + parseInt(elem), 0);
    return (result === 1) ? `${result} copo de água` : `${result} copos de água`;
};

module.exports = hydrate;