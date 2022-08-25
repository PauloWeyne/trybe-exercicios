// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function twoYears () {
    let paragraph = document.getElementsByTagName('p') [1];
    paragraph.innerHTML = 'ser Dev Fullstack!';
}
twoYears()

//  2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function trybeColor () {
    let yellow = document.getElementsByClassName('main-content') [0];
    yellow.style.background = "rgb(76,164,109)";
}
trybeColor()

//  3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function softGray () {
    let red = document.getElementsByClassName('center-content') [0];
    red.style.background = "rgb(85,85,85)"
}
softGray()

//  4. Crie e execute uma função que corrija o texto da tag <h1>.

function correctText () {
    let escripito = document.getElementsByClassName('title') [0];
    escripito.innerHTML = 'Exercício 5.1 - JavaScript'
}
correctText()

//  5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function upperCase () {
    let paragraph = document.getElementsByTagName('p') [0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase()
}
upperCase()

//  6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showParagraphs () {
    let paragraph = document.getElementsByTagName('p');
    for (let index = 0; index < paragraph.length; index += 1) {
        console.log(paragraph[index].innerHTML);
    }
}
showParagraphs()


