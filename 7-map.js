// Map é uma outra estrutura do tipo chave-valor parecida com o Objeto
// A diferença é que a chave (atributos) de uma estrutura Map pode ser uma função, um number,um objeto. Isso possibilita ter uma maior flexibilidade no ponto de vista da criação de chaves. 
const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });


console.log(tecnologias.react); // Undefined pois tecnologias não é um objeto
console.log(tecnologias.get('react')); // Similar a um tecnologias.react em um objeto

// Outra forma de criar um map atribuindo elementos
const chavesVariadas = new Map([
  [function () { }, 'Função'], // A chave é uma função
  [{}, 'Objeto'], // A chave é um objeto
  [123, 'Número'], // A chave é um number
]);

chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor);
});

console.log(chavesVariadas.has(123)); // Verifica de a chave está presente dentro do map chavesVariadas
chavesVariadas.delete(123); // Deleta a chave 123 do map chavesVariadas. Retorna true/false
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); // O atributo size retorna o numero de elementos dentro de um map

chavesVariadas.set(123, 'a'); // A chave não pode ser repetida dentro de um map
chavesVariadas.set(123, 'b'); // Porém o valor do elemento pode ser alterado
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);