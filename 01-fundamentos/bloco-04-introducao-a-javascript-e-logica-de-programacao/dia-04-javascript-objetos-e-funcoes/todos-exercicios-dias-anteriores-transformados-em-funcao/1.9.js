function parOuImpar(a, b, c) {
  if (((a % 2) != 0) || ((b % 2) != 0) || ((c % 2) != 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(parOuImpar(11, 20, 30));