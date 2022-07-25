// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let array = [];

for (index = 0; index < word.length; index += 1) {
  array.push(word[index])
}

console.log(array);

let novoArray = [];

for (index = array.length -1; index >= 0; index -= 1) {
  novoArray.push(array[index])
}

console.log(novoArray);