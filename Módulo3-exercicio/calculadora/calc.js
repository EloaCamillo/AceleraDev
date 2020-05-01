function add(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1*num2;
}

function div(num1,num2){
    if(num2==0){
        return "Erro não pode dividir por zero";
    }
    return num1/num2;
}
// let aux = div(25,5);

// console.log("aux", aux);
//Para poder usar em outra página
module.exports = {
    soma:add,
    subtracao: sub,
    multiplicacao:mult,
    divisao: div
}