//perguntar quantas uva tem no cacho
//perguntar se voce quer comer uma uva ou nao
//se sim voce vai continuar comendo ate acabr o cacho, perguntando sempre se deseja comer novamente.
//caso pare de comer , mostrar quantas uvas forma comidas e quantas restam

var prompt = require('prompt-sync')();

let bunch = prompt('how many grapes are in the bunch ? ');

var grapes = []
var stopCondition = true;
while (stopCondition) {
  var eatGrapes = prompt('Do you want eat a grape ? Y/N ')
  if (eatGrapes.toLowerCase() == 'y') {
    stopCondition = true;
    grapes.push("grapes");
    if (grapes.length >= bunch) {
      console.log("You ate all the grapes ")
      stopCondition = false;
    }
  }
  else if (eatGrapes.toLowerCase() == 'n') {
    stopCondition = false;
  }
  else {
    console.log('Type Y/N')
  }
}
var remainingGrapes = bunch - grapes.length;
console.log(`You eat ${grapes.length} grapes.`)
console.log(`${remainingGrapes} grapes left.`)