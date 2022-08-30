function maiorNum(num1, num2) {
  if (num1 > num2) {
    return 'O maior número é ' + num1;
  } else if (num1 < num2) {
    return 'O maior número é ' + num2;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20));