function meuSalario(salarioBruto) {
  let descontoInss = 0;
  let salarioBase = 0;
  let ir = 0;
  if (salarioBruto > 5189.82) {
    descontoInss = 570.88;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189,82) {
    descontoInss = salarioBruto * 0.11;
  } else if (salarioBruto >= 1556,95 && salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
  } else {
    descontoInss = salarioBruto * 0.08;
  }
  console.log('Desconto do INSS: ' + descontoInss);

  salarioBase = salarioBruto - descontoInss;
  console.log('Salário com INSS descontado: ' + salarioBase);

  if (salarioBase > 4664.68) {
    ir = (salarioBase * 0.275) - 869.36;
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
  } else {
    ir = 0
  }
  console.log('Desconto do IR: ' + ir);
  
  return 'Salário líquido: ' + (salarioBase - ir);
}

console.log(meuSalario(3000));



