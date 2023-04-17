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
}

main()