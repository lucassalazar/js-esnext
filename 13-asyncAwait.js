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

// Recurso do ES8
// Objetivo de simplificar o uso de promises... (É utilizado junto com promises)
let obterAlunos = async () => { // Função marcada com a keyword async
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');
  return [].concat(turmaA, turmaB, turmaC);
}; // Retorna um objeto do tipo AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome)) //then obtem o objeto AsyncFunction
  .then(nomes => console.log(nomes));
