/* 5 - Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
“Pessoa” é a mais nova. */

const ademar = 2;
const adriana = 3;
const julia = 1;

if ((ademar < adriana) && (ademar < julia)) {
  console.log('Ademar é a pessoa mais nova');
}
else if ((adriana < ademar) && (adriana < julia)) {
  console.log('Adriana é a pessoa mais nova');
}
else {
  console.log('Júlia é a pessoa mais nova');
}
