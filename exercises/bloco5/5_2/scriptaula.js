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