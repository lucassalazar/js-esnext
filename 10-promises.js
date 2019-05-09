// É uma promessa. Utiliza o conceito de assincronismo.
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => { // Resolve e reject são callbacks, um pra quando a promessa é atendida e o outro quando não for atendida
    setTimeout(() => { // Usado para simular uma operação demorada, a cada 3s resolve a promise
      resolve(frase) // Chamará a função frase dentro de then. (Obs resolve aceita só 1 parametro)
    }, segundos * 1000);
  }); 
};

falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e));
