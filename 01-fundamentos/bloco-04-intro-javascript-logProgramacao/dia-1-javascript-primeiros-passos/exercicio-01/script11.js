// EXERCICIO 11


let aliquotaINSS;
let aliquotaIRPF;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIRPF = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIRPF = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIRPF = (salarioBase * 0.15) - 354.80;
} else if (salrioBase <= 4664.68) {
  aliquotaIRPF = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIRPF = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - aliquotaIRPF));