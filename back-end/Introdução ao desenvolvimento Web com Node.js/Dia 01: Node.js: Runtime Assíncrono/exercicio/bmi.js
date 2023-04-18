const readline = require('readline-sync');

// const pesoEmKg = 75;
// const alturaEmCm = 195;

const pesoEmKg = readline.questionFloat('Qual seu peso?');
const alturaEmCm = readline.question('Qual sua altura em centimetros?');

function handleIMC(peso, altura) {
    console.log(`Weight: ${peso}, Height: ${altura}`);

    const alturaEmMetros = alturaEmCm / 100;
    const alturaAoQuadrado = alturaEmMetros ** 2;

    const IMC = pesoEmKg / alturaAoQuadrado;

    return IMC;
}


function main() {
    const IMC = handleIMC(pesoEmKg, alturaEmCm);

    console.log(`IMC: ${IMC.toFixed(2)}`);

    if(IMC < 18.5) {
        console.log("Abaixo do peso (magreza)");
    }
    if(IMC >= 18.5 && IMC <= 24.9) {
        console.log("Peso normal");
    }
    if(IMC > 24.9 && IMC <= 29.9) {
        console.log("Acima do peso (sobrepeso)");
    }
    if(IMC > 29.9 && IMC <= 34.9) {
        console.log("Obesidade grau 1");
    }
    if(IMC > 34.9 && IMC <= 39.9) {
        console.log("Obesidade grau 2");
    }
    if(IMC >= 40) {
        console.log("Obesidade grau 3 e 4");
    }
}

main()