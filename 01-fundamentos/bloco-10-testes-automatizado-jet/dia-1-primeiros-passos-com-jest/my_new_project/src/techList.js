/** A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura: */

// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

// function techList(listTech, name) {
//   let tecnoAprender = [];
//   listTech.sort();
//   let resposta;
//   if (listTech.length !== 0) {
//     for (let index = 0; index < listTech.length; index += 1) {
//       tecnoAprender.push({
//         name,
//         tech: listTech[index],
//       });
//     }
//     resposta = tecnoAprender;
//   } else {
//     resposta = 'Vazio!';
//   }
//   return resposta;
// }
// techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

const techList = (listTech, name) => listTech.length === 0 ? 'Vazio!' : listTech.sort().map((tech) => ({  name, tech,  }));


module.exports = techList;