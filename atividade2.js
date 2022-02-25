var prompt = require('prompt-sync')();

var numero = prompt("escolha um numero")

for (var i = 0; i <= 10; i++) {
  console.log(numero + "+" + i + " = " + (numero * i));
}



