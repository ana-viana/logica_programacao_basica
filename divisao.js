//function somar (a,b) {
//    return a +b 
//}
//
//const resultado = somar (3,5)
//console.log(resultado)


function divisao (x , y) {
        return x / y
}
const resultado = divisao (3,2)
if(resultado > 0) {
    console.log(resultado);
} else {
        console.log("Divisão Impossível") 
}

let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets(6).split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[0]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(1 * 1).toFixed(1); 
        let divisao = X / Y; // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}