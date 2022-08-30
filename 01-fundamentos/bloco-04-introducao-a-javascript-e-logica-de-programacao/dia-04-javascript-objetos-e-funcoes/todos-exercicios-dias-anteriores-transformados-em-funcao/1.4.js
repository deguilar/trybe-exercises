function valor(a) {
  if (a > 0) {
    return 'positivo';
  } else if (a < 0) {
    return 'negativo';
  } else {
    return 'zero';
  }
}

console.log(valor(0));