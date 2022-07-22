/* 2 - Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha. */

let array = [];

for (index = 15; index <= 155; index += 1) {
  array.push(index);
}
//console.log(array);

let divisivelTres = 0;

for (index2 = 0; index2 <= array.length; index2 += 1) {
  if ((array[index2] % 3) === 0) {
    divisivelTres = divisivelTres + 1
  }
}

if (divisivelTres >= 50) {
  console.log('Possui mais de 50 números divisíveis por 3');
}
else {
  console.log('Não possui');
}

//

// let counter = 0;
// for(let index = 15; index <= 155; index += 1) {
//   if(index % 3 === 0) {
//     counter += 1;
//   }
// }

// if(counter >= 50) {
//   console.log('secret Message!');
// }
// else {
//   console.log('não');
// }