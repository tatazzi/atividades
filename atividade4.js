
var prompt = require('prompt-sync')();

let resposta = prompt("Deseja ver tabuada ?")

switch (resposta) {
  case 's':
    for (var l = 0; l <= 10; l++) {
      for (var i = 0; i <= 10; i++) {
        console.log(l + "x" + i + " = " + (l * i));
      }
    }
    console.log("sim")
    break;
  case "n":
    console.log("fim")
    break;
  default:
    console.log("invalido")
}
