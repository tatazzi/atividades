

var prompt = require('prompt-sync')();
//count
var counterMale = 0;
var counterFemale = 0;
var counterHealthInsurance = 0;
var counterHeartProblem = 0;
var counterMicrocephaly = 0;
var counterCurrentYear = 0;
var child = [];
var stopCondition = true;

while (stopCondition) {
  var childRegistration = prompt('Deseja cadastrar alguma criança ? S/N ')
  if (childRegistration.toLowerCase() == 's') {
    stopCondition = true;

    var stopConditionDay = true;
    while (stopConditionDay) {
      var birthday = prompt('Qual dia a criança nasceu ? ');
      if (birthday > 31 || birthday < 0) {
        console.log("Dia inexistente, digite novamente")
        stopConditionDay = true;
      } else if (isNaN(birthday)) {
        console.log("Digite apenas numeros")
      }
      else {
        stopConditionDay = false;
      }
    };
    var stopConditionMonth = true;
    while (stopConditionMonth) {
      var birthMonth = prompt('Qual o mes a criança nasceu ? ');
      if (birthMonth > 12 || birthMonth < 0) {
        console.log("Mes inexistente, digite novamente")
        stopConditionMonth = true;
      } else if (isNaN(birthMonth)) {
        console.log("Digite apenas numeros")
      } else {
        stopConditionMonth = false;
      }
    };
    var stopConditionYear = true;
    while (stopConditionYear) {
      var birthYear = prompt('Qual o ano a criança nasceu ? ');
      if (birthYear > 2022 || birthYear > 2000) {
        console.log("Ano inexistente, digite novamente")
        stopConditionYear = true;
      }
      else if (isNaN(birthYear)) {
        console.log("Digite apenas numeros")
      } else {
        stopConditionYear = false;
      }

    };
    var stopConditionWeight = true
    while (stopConditionWeight) {
      var questionWeight = prompt('Qual o peso da criança ? ');
      if (isNaN(questionWeight)) {
        console.log("Digite apenas numeros")
      } else {
        stopConditionWeight = false
      }
    };

    var stopConditionGender = true
    while (stopConditionGender) {
      var questionGender = prompt('Qual o sexo da criança ? ');

      if (questionGender == "masculino") {
        counterMale++
        stopConditionGender = false
      }
      else if (questionGender == "feminino") {
        counterFemale++
        stopConditionGender = false
      } else {
        stopConditionGender = true
        console.log('Digite um sexo valido')
      }
    }

    var stopConditionMicrocephaly = true
    while (stopConditionMicrocephaly) {
      var hasMicrocephaly = prompt('A criança possui microcefalia ? S/N ');

      if (hasMicrocephaly.toLowerCase() == 's') {
        stopConditionMicrocephaly = false
        counterMicrocephaly++
      }
      else if (hasMicrocephaly.toLowerCase() == 'n') {
        stopConditionMicrocephaly = false
      }
      else {
        stopConditionMicrocephaly = true
        console.log("digite S/N")
      };
    };

    var stopConditionHeartproblem = true
    while (stopConditionHeartproblem) {
      var hasHeartProblem = prompt('A criança possui problemas cardiaco ? S/N ');
      if (hasHeartProblem.toLowerCase() == 's') {
        counterHeartProblem++
        stopConditionHeartproblem = false
      }
      else if (hasHeartProblem.toLowerCase() == 'n') {
        stopConditionHeartproblem = false
      }
      else {
        console.log('digite S/N')
        stopConditionHeartproblem = true
      }
    };

    var stopConditionHealthInsurence = true
    while (stopConditionHealthInsurence) {
      var hasHealthInsurance = prompt('A criança possui plano de saúde ? S/N ');

      if (hasHealthInsurance.toLowerCase() == 'n') {
        counterHealthInsurance++
        stopConditionHealthInsurence = false
      }
      else if (hasHealthInsurance.toLowerCase() == 's') {
        stopConditionHealthInsurence = false
      }
      else {
        stopConditionHealthInsurence = true
        console.log('digite S/N')
      };
    }

    var allInfo = {
      data: `${birthday}/${birthMonth}/${birthYear}`,
      caracteristicas: {
        peso: `${questionWeight} kg`,
        sexo: `${questionGender}`
      },
      enfermidade: {
        microcefalia: `${hasMicrocephaly}`,
        problemaCardiaco: `${hasHeartProblem}`,
      },
      planoDeSaude: `${hasHealthInsurance}`
    }

    child.push(allInfo);

    if (birthYear == 2022) {
      counterCurrentYear++
    };
  }


  else if (childRegistration.toLowerCase() == 'n') {
    stopCondition = false;
    console.log("cadastro finalizado ")
  } else {
    console.log('Digite S/N')
  };

}


//relatorio
function porcentagem(numCasos, numCadastro) {
  return (numCasos / numCadastro) * 100;
}

console.log(child)
console.log('--------------RELATÓRIO---------------\n')
console.log(`${child.length} crianças cadastradas`)
console.log(`${counterCurrentYear} crianças nasceram no ano corrente `)
console.log(`${porcentagem(counterMicrocephaly, child.length)}% de crianças com microcefalia`)
console.log(`${porcentagem(counterHeartProblem, child.length)}% de crianças com problemas cardiacos`)
console.log(`${porcentagem(counterHealthInsurance, child.length)}% das crianças não tem plano de saúde`)
console.log(`${porcentagem(counterMale, child.length)}% das crianças são garotos`)
console.log(`${porcentagem(counterFemale, child.length)}% das crianças são garotas`)

