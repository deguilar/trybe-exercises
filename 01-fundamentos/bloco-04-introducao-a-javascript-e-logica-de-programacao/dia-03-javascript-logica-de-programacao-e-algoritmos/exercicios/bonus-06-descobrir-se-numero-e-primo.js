/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let primo = 17;
let soma = 0;

for (let index = 1; index <= primo; index += 1) {
  if (primo % index === 0) {
    soma = soma + 1;
  }
}

if (soma === 2) {
  console.log(primo + ' é um número primo');
}
else {
  console.log(primo + ' não é um número primo');
}