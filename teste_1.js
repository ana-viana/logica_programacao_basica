//Desafio
//Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da 
//divisão do primeiro pelo segundo. Caso não for possível, mostre a mensagem “divisao impossivel” 
//para os valores em questão.

//Entrada
//A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) 
//que serão lidos em seguida.

//Saída
//Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” 
//caso não seja possível efetuar o cálculo.

let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[3]);
    let Y = parseInt(line[2]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(1 * 1).toFixed(1); 
        let divisao = X / Y; // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}

function calcular (x) {
    return function (y) {
        return function (fn) {
            return fn = (x, y)
        }
    }
}

function divisao (x , y) {
        return x / y
}
const resultado = calcular (3) (2) (divisao)
if(resultado > 0) {
    console.log(resultado);
} else {
    console.log("Divisão Impossível")
}