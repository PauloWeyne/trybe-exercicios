let salarioBruto = 5000.00;
let salarioINSS;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto - (salarioBruto * 0.11)
} else if (salarioBruto > 5189.82) {
    salarioINSS = salarioBruto - 570.88
} else {
    console.log('erro')
}

if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS - 0
} else if (salarioINSS > 1903.98 && salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - [(salarioINSS * 0.075) - 142.80]
} else if (salarioINSS > 2826.65 && salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - [(salarioINSS * 0.15) - 354.80]
} else if (salarioINSS > 3751.05 && salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - [(salarioINSS * 0.225) - 636.13]
} else if (salarioINSS > 4664.68) {
    salarioLiquido = salarioINSS - [(salarioINSS * 0.275) - 869.36]
} else {
    console.log('ERRO')
}

console.log(salarioLiquido)