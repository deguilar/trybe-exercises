// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares = 0;
let somaPares = 0;

for (index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) === 0) {
    somaImpares = somaImpares + 1;
  }
  else {
    somaPares = somaPares + 1;
  }
}

console.log('Meu array possui: ' + somaImpares + ' números ímpares');

console.log('Meu array possui: ' + somaPares + ' números pares');

// DÚVIDA

//Se eu quisesse fazer um novo array só com os números pares, teria como?