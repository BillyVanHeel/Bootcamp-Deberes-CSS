//Iteración 1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let newUl = document.createElement('ul');
document.body.appendChild(newUl);

for (const country of countries) {
    let ulSpawn = document.createElement('li');
    ulSpawn.textContent= country;
    newUl.appendChild(ulSpawn);
}

//Iteración 2
let banisher = document.querySelector('.fn-remove-me');
banisher.remove();

//Iteración 3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let secondUl = document.createElement('ul');

for (const car of cars) {
    let ulLarvae = document.createElement('li');
    ulLarvae.textContent = car;
    secondUl.appendChild(ulLarvae);
}

let summonDiv = document.querySelector('[data-function = "printHere"]');
summonDiv.appendChild(secondUl);

//Iteración 4 
const realms = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const realm of realms) {
    let realmDiv = document.createElement('div');
    let title = document.createElement('h4');
    title.textContent= realm.title;
    let poster = document.createElement('img');
    poster.src = realm.imgUrl; 
    document.body.appendChild(realmDiv);
    realmDiv.appendChild(title);
    realmDiv.appendChild(poster);


//Iteración 6
    let purgeButton = document.createElement('button');
    purgeButton.textContent= 'eliminar este elemento';
    purgeButton.addEventListener("click", function(){
        realmDiv.remove();
    })  
    realmDiv.appendChild(purgeButton);
    
}
//Iteración 5
let deathButton = document.createElement('button');
deathButton.textContent= 'eliminar el último elemento';

deathButton.addEventListener("click", function () {
        const selector = document.querySelectorAll('div');
        selector[selector.length - 1].remove();
    
    
}, {once : true});

document.body.appendChild(deathButton);
