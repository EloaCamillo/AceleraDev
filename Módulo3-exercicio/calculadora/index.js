//importando a calculadora
const calculadora = require("./calc")
const prompt = require("prompt-sync")();

// const promptSync = require('prompt-sync')
// const prompt = promptSync();
function options(){
    console.log(`
    1 - somar
    2 - subtrair
    3 - multiplicar
    4 - dividir
    0 - sair
    `)
}
function optionSelected(opcao){
    const numb1 = Number(prompt(`Digite o numero 1 `))
    const numb2 = Number(prompt(`Digite o numero 2 `))

    if(opcao==1){
        return calculadora.soma(numb1, numb2)
    }
    if(opcao==2){
        return calculadora.subtracao(numb1, numb2)
    }
    if(opcao==3){
        return calculadora.multiplicacao(numb1, numb2)
    }
    if(opcao==4){
        return calculadora.divisao(numb1, numb2)
    }
    

}

let opcao;
const results = [];
while(opcao != "0"){
   
    options();
    opcao = prompt('Escolha uma opção ')
    if(opcao!="0"){
    const resultado = optionSelected(opcao)
    results.push(resultado)
    console.log(resultado);
    }
}

console.log("resultado", results)


