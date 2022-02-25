var prompt = require('prompt-sync')();

var resposta = prompt("Qual seu nome ?");

var idade = prompt("qual sua idade ?")

if (idade < 18) {
  console.log('seu nome é ' + resposta + ', você tem ' + idade + ' e por isso você é menor de idade')
}
else {
  console.log('seu nome é ' + resposta + ', você tem ' + idade + ' e por isso você é maior de idade')
}