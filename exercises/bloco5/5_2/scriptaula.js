// Acesse o elemento elementoOndeVoceEsta .
let elemento1 = document.querySelector('#elementoOndeVoceEsta');
console.log(elemento1);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elemento2 = elemento1.parentElement;
console.log(elemento2);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let elemento3 = elemento1.firstElementChild;
console.log(elemento3);

// Acesse o primeiroFilho a partir de pai .
let elemento4 = document.querySelector('#pai').firstElementChild;
console.log(elemento4);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let elemento5 = elemento1.previousElementSibling;
console.log(elemento5);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let elemento6 = elemento1.parentElement.innerText;
console.log(elemento6);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let elemento7 = elemento1.nextElementSibling;
console.log(elemento7);

// Agora acesse o terceiroFilho a partir de pai .
let elemento8 = document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling;
console.log(elemento8);

// Crie um irmão para elementoOndeVoceEsta
let brother1 = document.createElement('div');
brother1.innerText = 'exercicio 1 pt 2';
brother1.className = 'finalizar'
let elemento9 = document.querySelector('#pai').appendChild(brother1);

// Crie um filho para elementoOndeVoceEsta .
let son1 = document.createElement('p');
son1.innerText = 'exercicio 2 pt 2';
let elemento10 = document.querySelector('#elementoOndeVoceEsta').appendChild(son1);

// Crie um filho para primeiroFilhoDoFilho .
let son2 = document.createElement('p');
son2.innerText = 'exercicio 3 pt 2';
son2.className = 'paragrafo-filho-do-filho'
let elemento11 = document.querySelector('#primeiroFilhoDoFilho').appendChild(son2);

// A partir desse filho criado, acesse terceiroFilho .
let elemento12 = document.querySelector('.paragrafo-filho-do-filho').parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
console.log(elemento12);

// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let elemento13 = document.querySelector('#primeiroFilho');
elemento13.remove();

let elemento14 = document.querySelector('#terceiroFilho');
elemento14.remove();

function removeElements (selector) {
    let element = document.querySelector(selector);
    element.remove()
}

removeElements('#quartoEUltimoFilho');

let elemento15 = document.querySelector('#elementoOndeVoceEsta');
elemento15.nextSibling.remove();

let elemento16 = document.querySelector('#paiDoPai');
elemento16.replaceWith(...elemento16.childNodes)

let elemento17 = document.querySelector('.paragrafo-filho-do-filho');
elemento17.remove();

let elemento18 = document.querySelector('#segundoEUltimoFilhoDoFilho');
elemento18.remove();

let elemento19 = document.getElementsByTagName('p');
elemento19[0].remove();

let elemento20 = document.querySelector('.finalizar');
elemento20.remove();


