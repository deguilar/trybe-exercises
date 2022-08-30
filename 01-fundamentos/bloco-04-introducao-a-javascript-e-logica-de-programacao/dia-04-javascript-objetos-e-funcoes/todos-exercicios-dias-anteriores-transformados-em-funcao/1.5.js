function triangulo(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if ((a + b + c) === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro';
  } 
}

console.log(triangulo(20, 40, 120));