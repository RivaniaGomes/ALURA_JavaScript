function cumprimentar() {
  console.log("oi gente!");
}

cumprimentar();

function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`);
}

cumprimentaPessoa("Helena");

function cumprimentar() {
  return "Oi gente!";
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
}

cumprimentaPessoa("Paula"); // “Oi gente! Meu nome é Paula”

function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3;
}

operacaoMatematica(15, 30, 45); // 90

function comParametro(param) {
    console.log(param)
}
comParametro()

if (condicao) {
    // código a ser executado
   }

   const num1 = 10;

if (num1 === null) {
 console.log('número não fornecido');
}

const num = 10;

if (num !== null) {
 console.log(`o número é ${num}`);
}
