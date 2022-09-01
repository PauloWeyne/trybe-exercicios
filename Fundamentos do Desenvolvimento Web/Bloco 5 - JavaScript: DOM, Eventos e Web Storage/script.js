let elementH1 = document.createElement('h1');
document.body.appendChild(elementH1);
elementH1.innerHTML = 'Teste DOM';

function titleColor(){
    let colorTitle = document.getElementsByTagName('h1')[0];
    colorTitle.style.color = 'green'
}
titleColor()

let elementMain = document.createElement('p');
document.body.appendChild(elementMain);
elementMain.innerText = 'Colocando um texto...'

function textFont(){
    let fontText = document.getElementsByTagName('p');
    fontText.style.color = 'green';
}
textFont()