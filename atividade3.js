var prompt = require('prompt-sync')();

var inicio = prompt("Deseja ver tabuada ?")

if (inicio == "s") {
  for (var l = 0; l <= 10; l++) {
    for (var i = 0; i <= 10; i++) {
      console.log(l + "x" + i + " = " + (l * i));
    }
  }

}
else if (inicio == "n") {
  console.log("fim")
}
else {
  console.log("invalido")
}