//Iteración 1
fetch('https://api.agify.io?name=michael')
.then((michael) => michael.json())
.then ((michael) => {(console.log(michael));});

//Iteración 2
const baseUrl = 'https://api.nationalize.io/?name=';
 function seek (){
    fetch(baseUrl);
 }

 let seekingButton = document.querySelector('button');
 seekingButton.addEventListener('click', seek);