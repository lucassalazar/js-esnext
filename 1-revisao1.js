// ES6: Novas palavras reservadas para definir variaveis, let e const
  // Var tem apenas 2 escopos, de função e global. Já let e const possui ainda o escopo de bloco
{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);
// console.log(b); // ReferenceError: b is not defined

// Template String `Hello ${world} !`
const produto = 'Notebook';
console.log(`${produto} é melhor que PC.`);

// Destructuring
const [l, e, ...tras] = 'Lucas'; // Operador rest
console.log(l, e, tras);
console.log(l, e, ...tras); // Operador spread

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // Destructuring em objetos
console.log(i, nome);