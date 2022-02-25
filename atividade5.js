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
if (positivQuest == 2) {
  console.log("você é suspeito")
}
else if (positivQuest == 3) {
  console.log("você é cumplice")
}
else if (positivQuest == 4) {
  console.log("você é cumplice")
}
else if (positivQuest == 5) {
  console.log("você é assassino")
}
else {
  console.log("você é inocente")
}
