function triangulo(a, b, c) {
  let anguloValido = a > 0 && b > 0 && c > 0;
  if (anguloValido) {
    if (a + b + c === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Ângulo inválido';
  }
}

console.log(triangulo(20, 100, 60));