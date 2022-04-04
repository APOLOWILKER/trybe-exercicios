// Exercício 1 : Crie uma classe Car cuja o objeto representará um carro.
// Propriedades :
// Deve conter uma propriedade do tipo string chamada brand que representa a marca.
// Deve conter uma propriedade do tipo enum chamada color que representa a cor.
// A cor pode ser: preta, branca, vermelha ou prata.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
// Comportamentos :
// Deve possuir um método chamado honk que aciona a buzina do carro.
// Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
// Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
// Deve possuir um método chamado turnOn que liga o carro.
// Deve possuir um método chamado turnOff que desliga o carro.
// Deve possuir um método chamado speedUp que acelera o carro.
// Deve possuir um método chamado speedDown que reduz a velocidade do carro.
// Deve possuir um método chamado stop que para o carro.
// Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.

export enum Colors {
  BLACK = 'Preta',
  WHITE = 'Branca',
  RED = 'Vermelha',
  SILVER = 'Prata',
};

export enum Open {
  OPEN = 'Aberta',
  CLOSED = 'Fechada',
};

export enum Directions {
  LEFT = 'Equerda',
  RIGHT = 'Direita',
}


class Car {
  _brand: string;
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;

  }

  honk(): void {
    console.log(`Buzinando: BIP BIP`);
  }

  openTheDoor(opdoor: Open): void {
    // que recebe como parâmetro uma porta do tipo enum e abre.
    console.log(`abrindo a porta: ${Open.OPEN}`);
  }

  closeTheDoor(opdoor: Open): void {
    console.log(`Fechando a porta: ${Open.CLOSED}`);

    // que recebe como parâmetro uma porta do tipo enum e fecha.
  }

  turnOn(): void {
    // turnOn que liga o carro.
    console.log("Ligando carro.");
  }

  turnOff(): void {
    // que desliga o carro.
    console.log("Desligando o carro.");
  }
  speedUp(): void {
    // que acelera o carro.
    console.log("Acelerando carro.");
  }

  speedDown(): void {
    // que diminui a velocidade do carro.
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    // que para o carro.
    console.log("Parando carro.");
  }

  turn(direction: Directions): void {
    // que recebe uma direção do tipo enum e vira o carro.
    console.log(`Virando para a ${direction}.`);
  }

  aviso(value: number, direction:Directions) {
    console.log(`Em ${value} metros vire a ${direction} `);
  }

}

export default Car;