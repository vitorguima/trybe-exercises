const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//  1. Copie esse arquivo e edite apenas ele;
//  2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addTechClass(elementSelected, giveClassName) {
    let checkClassTech = document.getElementsByClassName(`${giveClassName}`);
    for (let index = 0; index <= checkClassTech; index += 1) {
        checkClassTech[index].classList.remove(`${giveClassName}`);
    }
    elementSelected.className = giveClassName;
    return
}
addTechClass(divDois, '.tech');

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

let textBox = document.querySelector('#input');
textBox.addEventListener('keydown', function () {
    let techClassElement = document.querySelector('.tech');
    techClassElement.innerText = 'o meu primeiro amor foi o Javascript';
})

// 4.Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1 Que tal redirecionar para seu portifólio?
let topThreeElement = document.querySelector('#mySpotrybefy');
topThreeElement.addEventListener('dblclick', function () {
    window.location.href = 'https://vitorguima.github.io/';
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

topThreeElement.addEventListener('mouseover', function() {
    topThreeElement.style.color = 'red';
})

topThreeElement.addEventListener('mouseout', function() {
    topThreeElement.style.color = 'white';
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.