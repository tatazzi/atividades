let pessoa = {
  nome: 'otavio',
  idade: 20,
  ciade: 'ipirá',
};

// criar funcao para retornar nome da pessoa
//desconstruir nome do objeto pessoa passado pelo parmentro
//retonar o nome
//chamar a funcao

let mostrarNome = ({ nome }) => {
  return nome;
}

console.log(`seu nome é ${mostrarNome(pessoa)}`)