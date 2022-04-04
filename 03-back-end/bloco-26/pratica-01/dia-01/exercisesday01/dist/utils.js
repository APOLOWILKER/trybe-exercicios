"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function makeError(unity) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}
// nossa função convert gora recebe como primeiro parâmetro um array de strings com as unidades de medida
function convert(units, value, forUnity, toUnity) {
    if (!units.includes(forUnity))
        makeError(forUnity); // se a unidade base não for válida lançamos um erro
    if (!units.includes(toUnity))
        makeError(toUnity); // se a unidade para a conversão não for válida lançamos um erro
    const forIndex = units.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
// nossa função exec passa a receber o array de unidades como parâmetro
function exec(units) {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    // com { cancel: "SAIR" }, nós customizamos nossa mensagem padrão para sair da escolha, por padrão é "CANCEL"
    const forUnityChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a unidade base:", { cancel: "SAIR" });
    // caso a pessoa escolha sair a função keyInSelect retornará -1
    // finalizamos o script e escrevemos saindo no terminal
    if (forUnityChoice === -1)
        return console.log("Saindo!");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnityChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a conversão:", { cancel: "SAIR" });
    // caso a pessoa escolha sair finalizamos o script e escrevemos saindo no terminal
    if (toUnityChoice === -1)
        return console.log("Saindo!");
    // chamamos a função convert do utils.ts passando as escolhas da pessoa usuária
    // não precisamos mais da função convert que havia no nosso script
    const forUnity = units[forUnityChoice];
    const toUnity = units[toUnityChoice];
    const result = convert(units, value, forUnity, toUnity);
    // montamos a mensagem de saída
    const message = `${value}${units[forUnityChoice]} é igual a ${result}${units[toUnityChoice]}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exports.default = {
    convert,
    exec
};
