//Depois, faça uma pirâmide com n asteriscos de base:


let n = 3;
let asterisco = "*";
let linhaEntrada = "";
let posicaoEntrada = n;


for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
  for (let columnIndex = 0;columnIndex <= n; columnIndex += 1) {
    console.log('colunaindex' + columnIndex)
    if(columnIndex < posicaoEntrada) {
      console.log('linhaEntrada' + linhaEntrada)
      linhaEntrada += 'E';
      console.log('linhaEntrada2' + linhaEntrada)
    } else {
      console.log('linhade entrada Else' + linhaEntrada)
      linhaEntrada +=  asterisco;
      console.log('linhade entrada Else2' + linhaEntrada)
    }
  }   
  console.log(linhaEntrada);
  linhaEntrada = '';
  posicaoEntrada -= 1;
}
