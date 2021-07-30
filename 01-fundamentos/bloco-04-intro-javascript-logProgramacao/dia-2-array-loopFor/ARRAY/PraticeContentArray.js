let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'comer cuscuz'];

tasksList.indexOf('comer cuscuz')

let indexOfTask = tasksList.indexOf('comer cuscuz')

console.log(indexOfTask)
// console.log(tasksList);

tasksList.shift();
tasksList.pop();
tasksList.unshift('Bom dia!!!!');
tasksList.push('Fazer exercícios da Trybe'); 
// adiciona mais uma tarefa

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']