// Este código não apresentará nenhuma funcionalidade nova de JS. Porém servira para consolidadar os conhecimentos sobre callbacks e promises.
// Primeiramente o exercicio será feito utilizando callback, para que se possa verificar algumas desvantagens desse método e na sequência o mesmo código será refatorado com o uso de promise.

// Utilizando apenas callbacks!
const http = require('http');

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, res => { // res é uma função callback
    let resultado = '';
    
    res.on('data', dados => {
      resultado += dados;
    });

    res.on('end', () => {
      callback(JSON.parse(resultado));
    });
  });
};

// Na sequencia, são chamadas algumas callbacks dentro das outras para adicionar em um unico array todos os alunos das turmas A, B e C.
let nomes = [];
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  // console.log(nomes);
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    // console.log(nomes);
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});
// Acima é demonstrado o problema da Callback Hell. Quanto mais callbacks forem adicionadas dentro das outras, código fica mais dificil de ser lido.