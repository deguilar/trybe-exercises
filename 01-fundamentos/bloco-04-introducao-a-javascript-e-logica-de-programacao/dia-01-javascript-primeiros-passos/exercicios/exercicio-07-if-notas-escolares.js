/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 20;

if (nota > 100 || nota < 0) {
  console.log('Erro na sua nota');
}
else if(nota >= 90) {
  console.log('Conceito A');
}
else if (nota >= 80) {
  console.log('Conceito B');
}
else if (nota >= 70) {
  console.log('Conceito C');
}
else if (nota >= 60) {
  console.log('Conceito D');
}
else if (nota >= 50) {
  console.log('Conceito E');
}
else {
  console.log('Conceito F');
} 
