const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const addNewKey = (obj, key, value) => {
  obj[key] = value;
}
addNewKey(lesson2, 'turno', 'noite')
console.log(lesson2);

/* 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

/* 3 - Crie uma função para mostrar o tamanho de um objeto. */

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson2));

/* 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.  */

const listValue = (obj) => Object.values(obj);
console.log(listValue(lesson1));

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const totalEstudantes = (obj) => {
  let result = 0;
  const array = Object.keys(obj);
  for (index in array) {
    result += obj[array[index]].numeroEstudantes;
  }  
  return result;
}

console.log(totalEstudantes(allLessons));


/* 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log(getValueByNumber(lesson1, 0));
 Output: 'Matématica' */

const valueKeyPosition = (obj, number) => Object.values(obj)[number];
console.log(valueKeyPosition); 


/* 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 
console.log(verifyPair(lesson3, 'turno', 'noite'));
Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Output: false
*/

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));


// Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.

const numberStudentMat = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
      total+= obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(numberStudentMat(allLessons));


/* bonus 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: */

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
