// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 22;

if (valor > 0) {
  console.log(valor + ' é positivo');
}
else if (valor < 0) {
  console.log(valor + ' é negativo');
}
else {
  console.log(valor);
}