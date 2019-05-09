// Set é uma nova estrutura do JS. Não aceita repetição e não é indexada
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco'); // Uma repetição é ignorada

console.log(times); // Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size); // 5
console.log(times.has('vasco')); // É case sensitive, vasco não é reconhecido // false
console.log(times.has('Vasco'));
times.delete('Flamengo'); // Deleta o elemento Flamengo
console.log(times.has('Flamengo')); // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet); // As repetições foram removidas, logo Set { 'Raquel', 'Lucas', 'Julia' }
