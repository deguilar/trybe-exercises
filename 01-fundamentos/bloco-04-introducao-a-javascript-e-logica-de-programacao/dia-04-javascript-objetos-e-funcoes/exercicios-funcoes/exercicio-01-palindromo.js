let array = [];
let arrayInverso = [];

function palindromo(nome) {
  for (let index = 0; index < nome.length; index += 1) {
    array.push(nome[index]);
  }
  console.log(array);
  
  for (let index2 = nome.length -1; index2 >= 0; index2 -= 1) {
    arrayInverso.push(nome[index2]);
  }
  console.log(arrayInverso);

  if (array === arrayInverso) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('arara'));

