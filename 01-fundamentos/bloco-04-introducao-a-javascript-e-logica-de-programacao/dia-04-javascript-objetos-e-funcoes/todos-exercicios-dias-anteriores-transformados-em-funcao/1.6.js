function pecaXadrez(peca) {
  if (peca === 'bispo') {
    return 'Bispo: anda em diagonal';
  } else if (peca === 'torre') {
    return 'Torre: anda na horizontal ou na vertical';
  } else if (peca === 'cavalo') {
    return 'Cavalo: anda em L';
  } else {
    return 'Peça inválida'
  }
}

console.log(pecaXadrez('BISPO'.toLocaleLowerCase()));