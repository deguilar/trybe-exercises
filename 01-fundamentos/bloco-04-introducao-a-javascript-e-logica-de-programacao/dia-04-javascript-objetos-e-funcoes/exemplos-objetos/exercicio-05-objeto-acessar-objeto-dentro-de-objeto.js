// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let person = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
};

person['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora possui ' + person['medals']['golden'] + ' e ' + person.medals.silver + ' medalhas de prata');