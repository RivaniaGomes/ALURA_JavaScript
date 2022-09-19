// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica)

const idade = 28
const pi = 3.14 //Dica: podemos utilizar o número PI através com o código Math.PI.

var a = 10
var b = 0
console.log(a/b) // Infinity
//Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

var a = 0
var b = 0
console.log(a/b) // NaN

var lista = [10,1, 5, 9, 8, 12, 15];
console.log(lista.sort());

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
console.log(lista.sort(comparaNumeros));

console.log(lista.sort((a, b) => a - b));

