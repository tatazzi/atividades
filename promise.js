function pegarTemperatura() {
  return new promise(function (resolve, reject) {
    console.log("pegando temperatura...");

    setTimeout(function () {
      resolve('40 na sombra');
    }, 2000);
  });
}

//usando o promise
console.log("codigo antes");

console.log("codigo durante");

temp.then(function (resultado) {
  console.log("temperatura: " + resultado);
})
temp.catch(function (error) {
  console.log("eita, deu erro");
});
console.log("codigo depois")