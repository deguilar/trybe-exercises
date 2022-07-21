// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares = 0;
let somaPares = 0;
let arrayImpar = [];
let arrayPar = [];

for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) === 0) {
    somaPares = somaPares + 1;
    arrayPar.push(numbers[index]);
  }
  else {
    somaImpares = somaImpares + 1;
    arrayImpar.push(numbers[index]);
  }
}

console.log('Meu array possui: ' + somaImpares + ' números ímpares. São eles: ' + arrayImpar);

console.log('Meu array possui: ' + somaPares + ' números pares. São eles: ' + arrayPar);
