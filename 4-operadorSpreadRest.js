// Operador ... rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de função

// Usando spread em objetos
const funcionario = { nome: 'Maria', salario: 12345.99 };
const clone = { ativo: true, ...funcionario }; // Espalhando os atributos do objeto funcionarios dentro do objeto clone
console.log(clone);

// Usando spread em arrays
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafael']; // Espalhando os elementos do array grupoA dentro do array grupoFinal
console.log(grupoFinal);