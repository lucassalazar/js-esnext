// ES8 (2017): Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log(Object.entries(obj)); //  [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


// ES6: Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
  nome, // Não é necessário mais colocar a chave e o valor (Ex: nome: nome)
  ola() { // Não é necessário colocar a chave e a função (Ex: ola: function() {})
    return 'Olá pessoal!'
  }
};

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {} // Uma classe em JS é uma função
class Cachorro extends Animal { // No fim das contas isso é transformado em herança por prototype
  falar() {
    return 'Au au!';
  }
}

console.log(new Cachorro().falar());

// A herança e a instanciação de objetos em javascript é feita a partir de funções