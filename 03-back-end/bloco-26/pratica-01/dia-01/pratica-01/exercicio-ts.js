// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
// require('tsconfig.json');
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["domingo"] = 1] = "domingo";
    daysOfWeek[daysOfWeek["segunda"] = 2] = "segunda";
    daysOfWeek[daysOfWeek["terca"] = 3] = "terca";
    daysOfWeek[daysOfWeek["quarta"] = 4] = "quarta";
    daysOfWeek[daysOfWeek["quinta"] = 5] = "quinta";
    daysOfWeek[daysOfWeek["sexta"] = 6] = "sexta";
    daysOfWeek[daysOfWeek["sabado"] = 7] = "sabado";
})(daysOfWeek || (daysOfWeek = {}));
console.log(daysOfWeek);
/// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
var rainbownColors;
(function (rainbownColors) {
    rainbownColors["red"] = "vermelho";
    rainbownColors["orange"] = "laranja";
    rainbownColors["yellow"] = "amarelo";
    rainbownColors["green"] = "verde";
    rainbownColors["blue"] = "azul";
    rainbownColors["indigo"] = "anil";
    rainbownColors["violest"] = "violeta";
})(rainbownColors || (rainbownColors = {}));
console.log(rainbownColors);
//Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
var actionsEnum;
(function (actionsEnum) {
    actionsEnum[actionsEnum["save"] = 1] = "save";
    actionsEnum[actionsEnum["print"] = 2] = "print";
    actionsEnum[actionsEnum["open"] = 3] = "open";
    actionsEnum[actionsEnum["toView"] = 4] = "toView";
    actionsEnum[actionsEnum["close"] = 5] = "close";
})(actionsEnum || (actionsEnum = {}));
console.log(actionsEnum);
//Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["norte"] = "N";
    cardinalPoints["leste"] = "L";
    cardinalPoints["sul"] = "S";
    cardinalPoints["oest"] = "O";
})(cardinalPoints || (cardinalPoints = {}));
console.log(cardinalPoints);
