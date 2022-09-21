//tipo de dado
//tipo boleanos

// consversao implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) // compara valor e tipo de dados
console.log(numero == numeroString)// compara apenas o valor

console.log(numero + numeroString) // concatenação

// conversao explicita
// number()
// string()

console.log(numero + Number(numeroString))

//ou pode converter direto na variavel

const numero1  = 456;
const numeroString1 = Number("456");

console.log(numero1 + numeroString1)

//Vamos fazer alguns exemplos de conversão de números e booleanos através de String():
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//Outra opção para transformarmos um valor em String é usar o toString():
let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

//Vamos fazer alguns exemplos de conversão de textos e booleanos através de Number():
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaNf

let usuarioConectado1 = false;
console.log(Number(usuarioConectado1)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

