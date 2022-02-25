//Perguntar se ele quer cadatrar alguem, caso S - cadastra, Caso N - encerrar a aplicação, Digitou outra coisa - Opção invalida, digite novamente
//Cadastrar o nome das pessoas que tem na familia
//Exibir o nome das pessoas depois de cadastrar todas da quantidade que ele escolheu no inicio

var prompt = require('prompt-sync')();

let condicaoDeParada = true;

while (condicaoDeParada) {
  var quest = prompt('Quantas pessoas tem em sua familia ? ');
  if (isNaN(quest)) {
    console.log('Caracter Inválido! Digite novamente!')
  } else {
    condicaoDeParada = false;
  }
}

let nomesCadastrados = []

for (let i = 0; i < quest; i++) {
  let name = prompt("Digite o nome :");
  nomesCadastrados.push(name)
}

for (var i = 0; i < nomesCadastrados.length; i++) {
  console.log('Nome ' + ': ' + nomesCadastrados[i]);
}
