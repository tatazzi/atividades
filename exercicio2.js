//Perguntar se ele quer cadatrar alguem, caso S - cadastra, Caso N - encerrar a aplicação, Digitou outra coisa - Opção invalida, digite novamente
//Cadastrar o nome das pessoas que tem na familia
//Exibir o nome das pessoas depois de cadastrar todas da quantidade que ele escolheu no inicio

var prompt = require('prompt-sync')();

let condicaoOptionError1 = true;
// while
while (condicaoOptionError1) {
  var option1 = prompt('Deseja cadastrar? [S]-Sim [N]-Não ');
  if (option1.toLowerCase() == 's' || option1.toLowerCase() == 'n') {
    condicaoOptionError1 = false
  } else {
    console.log('Opção inválida, digite novamente! ')
  }
}
var nomes = [];

let option2 = '';
do {
  if (option1 === 's') {
    var nomeCadastrado = prompt('Digite um nome: ');
    nomes.push(nomeCadastrado);
    option2 = prompt('Deseja digitar outro nome? [S]-Sim [N]-Não ');
  } else if (option1 === 'n') {
    console.log('Programa finalizado! ')
  }
} while (option2.toLowerCase() == 's');

nomes.map((item) => console.log(`Nome: ${item}`));
