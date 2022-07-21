// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position;

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index2] < numbers[index]) {
        //5            5  
      position = numbers[index2];
        //5 -> 9               9
      numbers[index2] = numbers[index];
        // 9 -> 5         5 
      numbers[index] = position;
    }
  }
}
console.log(numbers);