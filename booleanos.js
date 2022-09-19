//boolean

const usuarioLogado = true;
const contapaga = false;

//truthy ou falsy

// 0 => false
// 1=> true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// undefind

// null ===> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)

console.log(typeof minhaVar)
console.log(typeof varNull)

//Vou só substituir os consoles (typeof minhaVar) e (typeof varNull). Vou salvar, rodar e deu undefined em minhaVar. Só que, agora, o (typeof varNull) veio objeto, ele não veio null. E agora, Léo?

//Isso, ele veio como objeto. O que acontece? Como null foi criado no JavaScript, ele foi criado como um objeto. Ele deveria ter sido criado como null, só que ele é alguns dos bugs que tem dentro do JavaScript, que acaba ocorrendo, e que eles não pretendem consertar esses bugs.
