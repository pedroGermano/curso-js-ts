// function funcao(){
//   let total = 0;
//   for (let argumento of arguments){
//     total += argumento
//   }
//   console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7)


// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c, d, e, f){
//   console.log(a, b, c, d, e, f);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Pedro', sobrenome: 'Germano', idade: 33 }
funcao(obj)