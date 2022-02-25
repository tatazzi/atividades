var prompt = require('prompt-sync')();

var quest = prompt('telefonou para vitima ?')
var quest2 = prompt('esteve no local do crime ?')
var quest3 = prompt('mora perto da vitima ?')
var quest4 = prompt('devia para a vitima ?')
var quest5 = prompt('ja trabalhou com a vitima ?')

var positivQuest = 0
if (quest == "s") {
  positivQuest++
}
if (quest2 == "s") {
  positivQuest++
}
if (quest3 == "s") {
  positivQuest++
}
if (quest4 == "s") {
  positivQuest++
}
if (quest5 == "s") {
  positivQuest++
}
switch (positivQuest) {
  case 2: console.log("você é suspeito")
    break;
  case 3: console.log("você é cumplice")
    break;
  case 4: console.log("você é cumplice")
    break;
  case 5: console.log("você é o assasino")
    break;
  default: console.log("você é inocente")
}