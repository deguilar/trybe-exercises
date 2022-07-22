/* 1 - 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:

A soma de 35 a 105 é: X. */

let array = [];
let soma = 0;

for (index = 35; index <= 105; index += 1) {
  soma = soma + index;
}

console.log(soma);