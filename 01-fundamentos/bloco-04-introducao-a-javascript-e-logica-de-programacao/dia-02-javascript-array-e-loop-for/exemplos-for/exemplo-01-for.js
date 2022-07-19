// Suponha que temos uma lista com marcas de carros:
let cars = ['Saab', 'Volvo', 'BMW'];

// Anteriormente para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria:
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Mas, agora que conhecemos o for, podemos melhorar o código para algo como:

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}