function salarioRecebido(salarioBruto) {
  return salarioBruto;
}

let salarioQueRecebi = salarioRecebido(3000);
console.log('Meu salário: ' + salarioQueRecebi);

function descontoInss() {
  if (salarioQueRecebi > 5189.82) {
    return 570.88;
  } else if (salarioQueRecebi >= 2594.93 && salarioQueRecebi <= 5189,82) {
    return salarioQueRecebi * 0.11;
  } else if (salarioQueRecebi >= 1556,95 && salarioQueRecebi <= 2594.92) {
    return salarioQueRecebi * 0.09;
  } else {
    return salarioQueRecebi * 0.08;
  }
}

let inss = descontoInss();
console.log('Valor descontado de INSS: ' + inss);

function salarioBase () {
  return salarioQueRecebi - inss;
}

let meuSalarioBase = salarioBase();
console.log('Meu salário descontando o INSS: ' + meuSalarioBase);

function impostoRenda() {
  if (meuSalarioBase > 4664.68) {
    return (meuSalarioBase * 0.275) - 869.36;
  } else if (meuSalarioBase >= 3751.06 && meuSalarioBase <= 4664.68) {
    return (meuSalarioBase * 0.225) - 636.13;
  } else if (meuSalarioBase >= 2826.66 && meuSalarioBase <= 3751.05) {
    return (meuSalarioBase * 0.15) - 354.80;
  } else if (meuSalarioBase >= 1903.99 && meuSalarioBase <= 2826.65) {
    return (meuSalarioBase * 0.075) - 142.80;
  } else {
    return 0;
  }
}

let iR = impostoRenda();
console.log('Valor do meu imposto de renda: ' + iR);

function meuSalario() {
  return meuSalarioBase - iR;
}

console.log('Meu salário líquido: ' + meuSalario());