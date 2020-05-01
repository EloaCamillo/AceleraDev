const calculadora = require("./calc")

//titulo dos testes
describe("calculadora", () =>{
it("teste exemplo", ()=>{
    const numero1 = 23;
    const numero2 = 7;
    expect(23 + 7).toBe(30)//espero que 23+7 seja 30
    expect(23+7).not.toBe(31)
})
})

describe("Soma", ()=>{
    it("Retorna 3 quando 1 é somado com 2",()=>{
        const num1 =2
        const num2 =1

        expect(calculadora.soma(num1, num2)).toBe(3)
    })
})

describe("Subtracao", ()=>{
    it("Retorna 3 quando é subtraido 4 com 1", ()=>{
        const num1 =4
        const num2 =1

        expect(calculadora.subtracao(num1,num2)).toBe(3)
    })
})

describe("Multiplicação", ()=>{
    it("Retorna 6 quando multiplicado 2 por 3",()=>{
        const num1 =2
        const num2 = 3

        expect(calculadora.multiplicacao(num1,num2)).toBe(6)
    })
})

describe("Divisão", ()=>{
    it("Retorna 3 quando 6 é dividido por 2",()=>{
        const num1 = 6
        const num2 = 2
        expect(calculadora.divisao(num1,num2)).toBe(3)
    });
    it("Retorna Erro se divsão for por zero",()=>{
        const num1 =3
        const num2 =0

        expect(calculadora.divisao(num1,num2)).toBe("Erro não pode dividir por zero")
    })
})

