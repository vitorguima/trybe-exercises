document.body.style.textAlign = 'center';

let divStyle = document.getElementsByTagName('div');
divStyle[0].style.marginBottom = '150px';
divStyle[1].style.marginBottom = '150px';
divStyle[2].style.marginBottom = '150px';
divStyle[3].style.marginBottom = '150px';

let sectionStyle = document.querySelectorAll('section');
sectionStyle[0].style.display = 'inline-block';
sectionStyle[0].style.backgroundColor = 'orange';
sectionStyle[1].style.display = 'inline-block';
sectionStyle[1].style.backgroundColor = 'yellow';

let headerFirstSection = document.querySelectorAll('.emergency-tasks div h3');
headerFirstSection[0].style.backgroundColor = 'purple';
headerFirstSection[0].style.textAlign = 'center';
headerFirstSection[0].style.color = 'white';
headerFirstSection[0].style.padding = '5px 30px'
headerFirstSection[1].style.backgroundColor = 'purple';
headerFirstSection[1].style.textAlign = 'center';
headerFirstSection[1].style.color = 'white';
headerFirstSection[1].style.padding = '5px 30px'

let headerSecondSection = document.querySelectorAll('.no-emergency-tasks div h3');
headerSecondSection[0].style.backgroundColor = 'black';
headerSecondSection[0].style.textAlign = 'center';
headerSecondSection[0].style.color = 'white';
headerSecondSection[0].style.padding = '5px 25px'
headerSecondSection[1].style.backgroundColor = 'black';
headerSecondSection[1].style.textAlign = 'center';
headerSecondSection[1].style.color = 'white';
headerSecondSection[1].style.padding = '5px 25px'

let footerStyle = document.getElementsByTagName('footer');
footerStyle[0].style.backgroundColor = 'black';
footerStyle[0].style.color = 'white';
footerStyle[0].style.fontSize = '20px';
footerStyle[0].style.padding = '10px';
footerStyle[0].style.marginTop= '50px';

let heroHeader = document.getElementById('header-container');
heroHeader.style.backgroundColor = 'green';
heroHeader.style.padding = '0.5px';
heroHeader.style.color = 'white';
heroHeader.style.marginBottom = '50px';


