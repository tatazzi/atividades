var prompt = require('prompt-sync')();



let array = []

for (var i = 0; i <= 10; i++) {
  let numero = prompt("digite um numero ");
  array.push(numero)
}
for (var l = 1; l < array.length; l++) {
  console.log('Numero ' + l + ': ' + array[l]);
}
