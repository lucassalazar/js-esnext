// ES6: Arrow Function
  // Funções em uma unica linha
  // Restringe o escopo de this para o local onde a função foi escrita
  // Toda função arrow é anônima
const soma = (a, b) => a + b;
console.log(soma(2,6));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({}); // Este bind não funcionará, pois arrow function prevalece
lexico1();
lexico2();

// Se fosse uma função tradicional o this apontaria para global, e com um bind({}) o this apontaria para o objeto vazio

// Parâmetro defaulf
function log(texto = 'Node') {
  console.log(texto); // Caso o valor de texto seja undefined, o valor padrão 'Node' será usado
};
log();
log(undefined);
log(null); // Assume o valor null
log('Olá'); // Assume este valor

// Operador rest 
  // Este operador tem dois nomes, rest e spread. Porém no contexto da função o utilizado é o rest (agrupar), onde na chamada desta função, todos os argumentos passados são agrupados em um unico vetor. (O nome spread é utilizado em arrays e objetos)
function total(...numeros) { // O argumentos recebidos são agrupados no array numeros 
  let total = 0;
  numeros.forEach(numero => total += numero);
  return total;
};
console.log(total(1,2,3,4,5,6)); // Passando argumentos espalhados