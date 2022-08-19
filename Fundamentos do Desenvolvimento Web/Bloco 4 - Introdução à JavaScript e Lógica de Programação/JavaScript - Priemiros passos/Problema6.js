let xadrez = 'rei'

if (xadrez == 'peao') {
    console.log('uma casa a frente')
} else if (xadrez == 'torre') {
    console.log('linha reta')
} else if (xadrez == 'bispo') {
    console.log('linha diagonal')
} else if (xadrez == 'cavalo') {
    console.log('L')
} else if (xadrez == 'rainha') {
    console.log('todos os movimentos menos o L do cavalo')
} else if (xadrez == 'rei') {
    console.log('uma casa em qualquer direção')
} else {
    console.log("erro")
}