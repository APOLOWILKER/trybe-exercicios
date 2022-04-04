import Car, { Directions } from "./classe";
import { Colors } from "./classe";

// Car = require('./classe');

const gol = new Car('Volksvagem', Colors.SILVER, 4);

const round = 'rodou'

gol.turnOn();
gol.speedUp();
gol.aviso(600, Directions.LEFT)
gol.turn(Directions.LEFT);
gol.aviso(200, Directions.RIGHT)


