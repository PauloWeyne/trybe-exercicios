let ang1 = 60
let ang2 = 60
let ang3 = 60

let triangulo = ang1 + ang2 + ang3

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log('erro!')
} else if (triangulo == 180) {
    console.log(true)
} else if (triangulo != 180) {
    console.log(false)
}