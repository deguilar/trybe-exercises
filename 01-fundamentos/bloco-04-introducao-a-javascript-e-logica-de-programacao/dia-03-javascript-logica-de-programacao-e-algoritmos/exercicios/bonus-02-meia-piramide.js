/* 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
***** */

let numero = 5;
let asterisco = '*';
let soma = '';

for (let index = 1; index <= numero; index += 1) {
  soma = soma + asterisco;
  console.log(soma);
}