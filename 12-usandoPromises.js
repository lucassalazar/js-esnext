// Este código não apresentará nenhuma funcionalidade nova de JS. Porém servira para consolidadar os conhecimentos sobre callbacks e promises.

// Utilizando promises!
const http = require('http');

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => { // Duas funções callback, resolve e reject
    http.get(url, res => { // res é uma função callback
      let resultado = '';
      
      res.on('data', dados => {
        resultado += dados;
      });
  
      res.on('end', () => {
        try{
          resolve(JSON.parse(resultado));
        } catch(e) {
          reject(e);
        }
      });
    });
  });
};

// let nomes = [];
// getTurma('A').then(alunos => {
//   nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
//   // console.log(nomes);
//   getTurma('B').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
//     // console.log(nomes);
//     getTurma('C').then(alunos => {
//       nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
//       console.log(nomes);
//     });
//   });
// });

// Promise.all espera todas as promises serem resolvidas ou rejeitadas e depois chama a função then. Neste exemplo quando todas as promises forem resolvidas, um array contendo as três turmas será enviado à função then. Obs: Promisse.all executa as promises usando paralelismo e não sequencialidade.
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message)); // Sempre colocar um tratamento para um possivel reject

getTurma('D').catch(e => console.log(e.message));