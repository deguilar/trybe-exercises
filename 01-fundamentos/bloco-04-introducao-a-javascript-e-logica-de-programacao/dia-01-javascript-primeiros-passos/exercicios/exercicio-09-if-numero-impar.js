/* 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const a = 14;
const b = 16;
const c = 15;

if ((a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0)) {
  console.log(true);
}
else {
  console.log(false);
}