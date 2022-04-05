class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections:  string;
  private _connectedTo: string;
  
  constructor(b: string, s: number, re: string, con: string ) {
    console.log(`A tv é ${b} `);
    this.brand = b;
    this.size = s;
    this.resolution = re;
    this.connections = con;
  }

  get connectedTo() {
    return this.connectedTo;
  }

  set connectedTo(_connections) {
    _connections ? this._connectedTo : 'Sorry, connection unavaiable!'
  }

  TurnOn() {
    console.log(`
    TV modelo: ${this.brand},
    com uma tela de ${this.size},
    de resolução ${this.resolution},
    Com conexões: ${this.connections},`)
  }
  
}

const TVQUATRO = new Tv('LG', 49, '4K', '4 conexões HDMI');
const TVTRINTA = new Tv('SAMSUNG', 32, 'FULL HD', '2 conexões HDMI');

TVQUATRO.TurnOn();
TVTRINTA.TurnOn();

//Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.