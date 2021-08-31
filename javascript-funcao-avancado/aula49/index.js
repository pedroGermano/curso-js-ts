// Declaração de função (Function hoisting)
falaOi()
function falaOi() {
  console.log('oi');
}

// First-class objects
const souUmDado = function () {
   console.log('Sou um dado.')
}

// souUmDado()

function executarFuncao(funcao){
  funcao()
}
executarFuncao(souUmDado)

const funcaoArrow = () => {
  console.log('Sou uma arrow function')
} 
funcaoArrow()

const obj = {
  falar(){
    console.log('Estou falando...')
  }
}

obj.falar()