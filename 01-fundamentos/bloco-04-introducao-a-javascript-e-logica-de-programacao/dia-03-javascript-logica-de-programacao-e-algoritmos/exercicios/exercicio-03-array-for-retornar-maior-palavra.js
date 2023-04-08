/* 3 - Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0].length; 
let menorPalavra = array[0].length;

for (let index = 1; index < array.length; index += 1) {
  if(array[index].length > maiorPalavra) {
    maiorPalavra = array[index];
  }
}

console.log(maiorPalavra);

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < menorPalavra) {
    menorPalavra = array[index];
  }
}

console.log(menorPalavra);