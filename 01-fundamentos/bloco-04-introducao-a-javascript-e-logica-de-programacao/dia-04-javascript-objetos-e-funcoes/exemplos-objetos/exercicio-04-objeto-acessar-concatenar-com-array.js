// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

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

// Ao tentar acessar uma chave inexistente o JavaScript automaticamente irá criar essa chave.

console.log('A jogadora ' + person.name + ' ' + person.lastName+ ' foi eleita a melhor do mundo por ' + person.bestInTheWorld.length + ' vezes.');