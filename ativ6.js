var prompt = require('prompt-sync')();

let array = [30, 231, 32, 73, 43, 52, 106, 736, 81, 159, 210, 811];

function soma(x, y) {
  return x + y;
}

let x = prompt('Digite a primeira posição: ');
let y = prompt('Digite a segunda posição: ');

if (x > 11 || y > 11) {
  console.log("posição não encontrada")
} else {
  console.log(soma(array[x], array[y]));
}
