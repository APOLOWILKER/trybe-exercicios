


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}


for (let key in car) {
  console.log(key);
}

