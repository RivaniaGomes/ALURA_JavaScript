const texto1 = "Olá, mundo";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "3456";

const citaçao = "meu nome é:";
const meuNome = "Rivania"
//console.log(citaçao)

//concatenacao (+)
console.log(citaçao + "\n" + meuNome);

//template string ou template literal


//codificação de caracteres, ou character encoding - O JavaScript usa, por padrão, o UTF-16
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

console.log('ALFABETO'.toLowerCase()); // 'alfabeto'

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length

const senha1 = "minhaSenha123"
console.log(senha.length) // 13 caracteres

var x = 'Mozilla';
var empty = '';

console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
/* "Mozilla possui 7 unidades de código de comprimento" */

console.log('A string vazia possui um comprimento de ' + empty.length);
/* "A string vazia possui um comprimento de 0" */

let myString = "campainhas";

// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 4;
console.log(myString);
// retorna  "campainhas"
console.log(myString.length);
// retorna 10

//Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)


//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos

var num = 15;
alert(String.replace(num, /5/, '2'));

/*globals define*/
// Assume que todos os métodos de instância String fornecidos
// já presentes (podem ser usadas implementações para este se não disponível)
(function () {
    'use strict';

    var i,
        // Nós também poderíamos construir o array de métodos com os seguintes,
        // mas o método getOwnPropertyNames() não é implementável:
        // Object.getOwnPropertyNames(String).filter(function (methodName)
        //  {return typeof String[methodName] === 'function'});
        methods = [
            'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
            'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
            'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
            'toLocaleUpperCase', 'localeCompare', 'match', 'search',
            'replace', 'split', 'substr', 'concat', 'slice'
        ],
        methodCount = methods.length,
        assignStringGeneric = function (methodName) {
            var method = String.prototype[methodName];
            String[methodName] = function (arg1) {
                return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
            };
        };

    for (i = 0; i < methodCount; i++) {
        assignStringGeneric(methods[i]);
    }
}());
