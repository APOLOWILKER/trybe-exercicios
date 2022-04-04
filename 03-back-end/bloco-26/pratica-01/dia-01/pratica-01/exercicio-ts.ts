// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
// require('tsconfig.json');

enum daysOfWeek {
  domingo = 1,
  segunda = 2,
  terca = 3,
  quarta = 4,
  quinta = 5,
  sexta = 6,
  sabado = 7
}

console.log(daysOfWeek);

/// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.

enum rainbownColors {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul',
  indigo = 'anil',
  violest = 'violeta'
}

console.log(rainbownColors);

//Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.

enum actionsEnum {
  save = 1,
  print = 2,
  open = 3,
  toView = 4,
  close = 5
}

console.log(actionsEnum);

// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.

enum cardinalPoints {
  norte = 'N',
  leste = 'L',
  sul = 'S',
  oest = 'O'
}

console.log(cardinalPoints);