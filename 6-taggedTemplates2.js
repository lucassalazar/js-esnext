function real(partes, ...valores) { // Monta um string final
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`; // Se valor não for um number, retorna valor, caso contrário retorna uma template string
    resultado.push(partes[indice], valor);
  });
  return resultado.join('');
};

const preco = 29.99;
const precoParcela = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`); // Chama a função real e passa como parametro uma template string. No primeiro argumento será passado ['1x de', '', ou 3x de', ''] para o parâmetro partes, e os valores interpolados de preco e precoParcela serão passados ao parâmetro valores.

// Tagged Template possibilita ter maior controle sobre como rederizar uma template string