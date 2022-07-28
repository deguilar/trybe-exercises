/* 1 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
***** */

let numero = 4;
let asterisco = "*";
let soma = '';

for (let index = 1; index <= numero; index += 1) {
  soma = soma + asterisco;
}

for (let index = 1; index <= numero; index += 1) {
  console.log(soma);
}

