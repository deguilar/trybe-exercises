let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

for (let position in food) {
  console.log(food[position]);
};
//resultado: 0, 1, 2;