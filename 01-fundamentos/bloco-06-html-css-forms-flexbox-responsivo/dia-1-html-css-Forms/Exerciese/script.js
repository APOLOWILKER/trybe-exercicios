const states = ["Estado", "AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];

for (let index = 0; index < states.length; index+= 1) {
  let state = states[index]
  
  let option = document.createElement("option");

  option.value= state;
  option.innerHTML = state;

  let select = document.querySelector('#estados');

  select.appendChild(option);
}

let submitButton = document.getElementById('envio');

submitButton.addEventListener('click', () => {
  
  // dd/mm/aaaa
  let date = document.querySelector('#data').value;

  let day=;
  let month=;
  let year=;
  

  if (){

  }

})



