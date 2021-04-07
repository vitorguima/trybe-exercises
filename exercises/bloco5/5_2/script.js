let bodyElement = document.querySelector('body');

//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let heroTitle = document.createElement('h1');
heroTitle.className = 'title';
heroTitle.innerText = 'Exercício 5.2 - JavaScript DOM';

bodyElement.appendChild(heroTitle);

//2 Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';

bodyElement.appendChild(mainContent);

//3 Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';

mainContent.appendChild(centerContent);

//4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let firstParagraph = document.createElement('p');
firstParagraph.innerText = 'algum texto';

centerContent.appendChild(firstParagraph);
//5 Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.className = 'left-content';

mainContent.appendChild(leftContent);

//6 Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.className =  'right-content';

mainContent.appendChild(rightContent);

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let firstImage = document.createElement('a');
firstImage.className = 'small-image';
firstImage.href = 'https://picsum.photos/200';

leftContent.appendChild(firstImage);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let unorderedList = document.createElement('ul');
rightContent.appendChild(unorderedList);

function listItem(variable,text) {
    variable = document.createElement('li');
    variable.innerText = text;
    unorderedList.appendChild(variable);
}

listItem('item1','um');
listItem('item2','dois');
listItem('item3','três');
listItem('item4','quatro');
listItem('item5','cinco');
listItem('item6','seis');
listItem('item7','sete');
listItem('item8','oito');
listItem('item9','nove');
listItem('item10','dez');

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let firstSubtitle = document.createElement('h3');
firstSubtitle.class = 'description';
let secondSubtitle = document.createElement('h3');
secondSubtitle.class = 'description';
let thirdSubtitle = document.createElement('h3');
thirdSubtitle.class =  'description';

mainContent.appendChild(firstSubtitle);
mainContent.appendChild(secondSubtitle);
mainContent.appendChild(thirdSubtitle);

