/* 3 - Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”. */

const jogador1 = 'Pedra';
const jogador2 = 'Pedra';

if (jogador1 === 'Papel' && jogador2 === 'Pedra') {
  console.log('Jogador 1 venceu');
}
else if (jogador1 === 'Pedra' && jogador2 === 'Tesoura') {
  console.log('Jogador 1 venceu');
}
else if (jogador1 === 'Tesoura' && jogador2 === 'Papel') {
  console.log('Jogador 1 venceu');
}  
else if (jogador1 === jogador2) {
  console.log('Empate');
}
else {
  console.log('Jogador 2 venceu');
}