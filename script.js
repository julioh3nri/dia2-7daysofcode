// ** Variáveis **
// Variáveuis permitem armazenas e manipular informações dentro de um programa. Tipo colocar as informações em um site, como por exemplo, o nome pessoal do Facebook que ira repetir isso até que você altere o valor da variável. No Js, podemos criar variáveis do tipo de dados, números, textos e listas. Segue Exemplos:

// let nome = "Julio"; // Variável do tipo string (texto)
// let idade = 24; // Variável do tipo number (número)
// let estudandoOracleOne = true; // Variável do tipo boolean (verdadeiro ou falso)

// Resolução do Desafio junto com o opcional

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
let linguagem = prompt("Qual a linguagem de programação você está estudando?")

console.log(`Olá ${nome}, você tem ${idade} anos e já está estudando ${linguagem}`);

let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para SIM, 2 para NÃO`)

if (gostaDeEstudar == "1") {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeEstudar == "2") {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    console.log("Resposta inválida! Tente novamente com 1 para SIM ou 2 para NÃO.");
}