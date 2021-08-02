// Agora inverta o lado do triângulo. 

let n = 5;
let asterisco = "*";
let linhaEntrada = "";
let posicaoEntrada = n;


for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
  for (let columnIndex = 0;columnIndex <= n; columnIndex += 1) {
    if(columnIndex < posicaoEntrada) {
      linhaEntrada += ' ';
    } else {
      linhaEntrada +=  asterisco;
    }
  }   
  console.log(linhaEntrada);
  linhaEntrada = '';
  posicaoEntrada -= 1;
}


