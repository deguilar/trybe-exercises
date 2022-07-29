// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

let person = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
};

console.log(person['name']); //ou
console.log(person.name);

console.log(person['lastName']);

console.log(person['age']);

console.log('A jogadora ' + person['name'] + ' ' + person['lastName'] + ' tem ' + person['age'] + ' anos de idade');