//O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
//É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

//undefined também é o valor retornado por uma função que não tem cláusula return. Veremos mais sobre funções e return mais adiante no curso.

console.log(null == undefined); // true
console.log(null === undefined); // false

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(soma, multiplicacao, operacao)