/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

const pecaXadrez = 'BiSPo';

switch (pecaXadrez.toLocaleLowerCase()) {
  case 'peao':
    console.log('Peão: Anda uma ou duas casas para frente');
    break;
  case 'torre':
    console.log('Torre: Anda na horizontal ou vertical');
    break;
  case 'bispo':
    console.log('Bispo: Anda nas diagonais');
    break;
  case 'cavalo':
    console.log('Cavalo: Anda em "L"');
    break;
  case 'rainha':
    console.log('Rainha: Anda em qualquer direção');
    break;
  default:
    console.log('Peça inexistente');
}