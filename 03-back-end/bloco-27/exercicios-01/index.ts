/* Classe que representa pessoas estudantes de uma escola.
*/

class StudentsSchool {
  matricula: string;
  name: string;
  prova1: number;
  prova2: number;
  prova3: number;
  prova4: number;
  trabalho1: number;
  trabalho2: number;

  constructor(matricula: string, name: string, 
    prova1: number, prova2: number, prova3: number, prova4: number, trabalho1: number, trabalho2: number) {
    this.matricula = matricula;
    this.name = name;
    this.prova1 = prova1;
    this.prova2 = prova2;
    this.prova3 = prova3;
    this.prova4 = prova4;
    this.trabalho1 = trabalho1;
    this.trabalho2 = trabalho2;
  }

  calcNotas() {
    return this.prova1 + this.prova2 + this.prova3 + this.prova4;
  }

  mediaNotas() {
    return this.calcNotas() / 4
  }
};

