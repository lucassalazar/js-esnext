// Enquanto o for in opera em cima dos indices de uma estrutura, o for of opera sobre os valores.

for (let letra of "Cod3r") {
  console.log(letra);
};

const assuntosEcma = ['Map', 'Set', 'Promise'];

for(let i in assuntosEcma) {
  console.log(i); // Percorre o array assuntosEcma e retorna o índice de cada elemento
};

for(let assunto of assuntosEcma) {
  console.log(assunto); // Percorre o array assuntosEcma e retorna o valor de cada elemento
};

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
]);

for (let assunto of assuntosMap) {
  console.log(assunto); // retorna todas os elementos com as chaves e valores
};

for (let chave of assuntosMap.keys()) { // Retorna todas as chaves de Map
  console.log(chave);
};

for (let valor of assuntosMap.values()) { // Retorna todos os valores de Map
  console.log(valor);
};

for(let [ch, vl] of assuntosMap.entries()) { // O metodo entries retorna um array [cv, vl]
  console.log(ch, vl);
};

for (let [cv, vl] of assuntosMap) { // Retorna o mesmo da função anterior, sem o metodo entries()
  console.log(cv, vl);
};

const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
  console.log(letra);
};