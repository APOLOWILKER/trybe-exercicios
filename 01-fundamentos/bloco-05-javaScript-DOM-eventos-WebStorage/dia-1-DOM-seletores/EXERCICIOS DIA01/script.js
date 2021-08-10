

        // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        // - document.getElementById()
        // - document.getElementsByClassName()
        // - document.getElementsByTagName()

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function future(){
 document.getElementsByTagName("p")[1].innerHTML = "Formado na trybe e bem sucedido";
}
future();

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor(){
  document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)";
}

changeColor();

//  Crie uma função que mude a cor do quadrado vermelho para branco.

function changeColor2(){
  document.getElementsByClassName("center-content")[0].style.background = "white"
}
changeColor2();

//  Crie uma função que corrija o texto da tag <h1>.

function changeText(){
  document.getElementsByTagName("h1")[0].innerHTML = "Exercício 5.1 - JavaEscripit"
}
changeText();

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function changeTextP(){
  let paragrafos = document.getElementsByTagName("p");

  for (let index = 0; index < paragrafos.length; index+=1){
    paragrafos[index].innerText = paragrafos[index].innerText.toUpperCase();
  }  
}
changeTextP();

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console. <!---->;;

function exibeTagP(){
  let paragrafosP = document.getElementsByTagName("p");

  for (let index = 0; index < paragrafosP.length; index+=1){
    console.log(paragrafosP[index].innerHTML);

  }
}
exibeTagP();

