//perguntar quantas uva tem no cacho
//perguntar se voce quer comer uma uva ou nao
//se sim voce vai continuar comendo ate acabr o cacho, perguntando sempre se deseja comer novamente.
//caso pare de comer , mostrar quantas uvas forma comidas e quantas restam

var prompt = require('prompt-sync')();

let bunch = prompt('how many grapes are in the bunch ? ');

let eatenGrapes = 0;

do {
  var responseEat = prompt(`Do you wanna eat ${(eatenGrapes == 0) ? 'a' : 'another'} grape ? [y]-Yes [n]-No `);
  var yesCondition = responseEat.toLowerCase() == 'y';
  var commandNotFoundCondition = responseEat.toLowerCase() != 'n';

  if (yesCondition) {
    eatenGrapes++;
  } else if (commandNotFoundCondition) {
    console.log('Command not found! Type again!')
  }
} while ((parseInt(bunch) - eatenGrapes > 0) && (yesCondition || commandNotFoundCondition));

console.log(`You ate ${eatenGrapes} grapes!`)
console.log(`${parseInt(bunch) - eatenGrapes} grapes left on bunch!`)
