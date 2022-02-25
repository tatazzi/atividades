
//coletar informações e nascimeto
//coletar caracteristicas fisicas
//microcefalia S/N
//problemas cardiacos S/N
//diabetes S/N
//plano de saude S/N

var prompt = require('prompt-sync')();
//count
var countMale = 0;
var countFemale = 0;
var countPlano = 0;
var countCardio = 0;
var countMicro = 0;
var countAno = 0;
var countCrianca = 0;
var crianca = [];
var stopCondition = true;

while (stopCondition) {
  var cadastro = prompt('Deseja cadastrar alguma criança ? S/N ')
  if (cadastro.toLowerCase() == 's') {
    stopCondition = true;

    var dia = prompt('Qual dia a criança nasceu ? ');

    var mes = prompt('Qual o mes a criança nasceu ? ');

    var ano = prompt('Qual o ano a criança nasceu ? ');

    var questPeso = prompt('Qual o peso da criança ? ');

    var questSexo = prompt('Qual o sexo da criança ? ');

    var microcefalia = prompt('A criança possui microcefalia ? S/N ');

    var problemaCardiaco = prompt('A criança possui problemas cardiaco ? S/N ');

    var antonio = prompt('A criança possui diabetes ? S/N ');

    var plano = prompt('A criança possui plano de saúde ? S/N ');

    var allInfo = {
      Data: `${dia}/${mes}/${ano}`,
      Caracteristicas: {
        Peso: `${questPeso} kg`,
        sexo: `${questSexo}`
      },
      Enfermidade: {
        Microcefalia: `${microcefalia}`,
        ProblemaCardiaco: `${problemaCardiaco}`,
        diabetes: `${antonio}`
      },
      PlanoDeSaude: `${plano}`
    }

    countCrianca++;
    crianca.push(allInfo);

    if (ano == 2022) {
      countAno++
    };

    if (microcefalia.toLowerCase() == 's') {
      countMicro++
    };

    if (problemaCardiaco.toLowerCase() == 's') {
      countCardio++
    };

    if (plano.toLowerCase() == 'n') {
      countPlano++
    };
    if (questSexo == 'masculino') {
      countMale++
    } else if (questSexo == 'feminino') {
      countFemale++
    }
  }


  else if (cadastro.toLowerCase() == 'n') {
    stopCondition = false;
    console.log("cadastro finalizado ")
  } else {
    console.log('Digite S/N')
  };

}


//relatorio
//quantas crianças foram cadastradas
//quantas crianças nasceram no ano corrente
//o percentual de crianças com microcefalia
//o percentual de crianças com problemas cardiacos
//percentual de crianças sem planos de saude
//o percentual de meninos e meninas
function porcentagem(numCasos, numCadastro) {
  return (numCasos / numCadastro) * 100;
}

console.log(crianca)
console.log('--------------RELATÓRIO---------------\n')
console.log(`${countCrianca} crianças cadastradas`)
console.log(`${countAno} crianças nasceram no ano corrente `)
console.log(`${porcentagem(countMicro, countCrianca)}% de crianças com microcefalia`)
console.log(`${porcentagem(countCardio, countCrianca)}% de crianças com problemas cardiacos`)
console.log(`${porcentagem(countPlano, countCrianca)}% das crianças não tem plano de saúde`)
console.log(`${porcentagem(countMale, countCrianca)}% das crianças são garotos`)
console.log(`${porcentagem(countFemale, countCrianca)}% das crianças são garotas`)

