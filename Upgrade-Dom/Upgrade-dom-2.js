//Iteración 1
let createDiv = document.createElement('div');
document.body.appendChild(createDiv);


//Iteración 2
let otherDiv = document.createElement('div');
document.body.appendChild(otherDiv);
let createP = document.createElement('p');
otherDiv.appendChild(createP);

//iteración 3
let createMotherDiv = document.createElement('div');
createMotherDiv.classList.add('Mother-div');
document.body.appendChild(createMotherDiv);

for (let i = 0; i < 6; i++) {
    const createChildren = document.createElement('p');
    createMotherDiv.appendChild(createChildren);    
}

//Iteración 4
let newP = document.createElement('p');
let textP = document.createTextNode('Soy dinámico!');
document.body.appendChild(newP);
newP.appendChild(textP);

//Iteración 5
let selectH2 = document.querySelector('h2.fn-insert-here');
let textH2 = document.createTextNode('Wubba Lubba dub dub');
selectH2.appendChild(textH2);

//Iteración 6

let newUl = document.createElement('ul');
document.body.appendChild(newUl);

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (const app of apps) {
    let Ulchildren = document.createElement('li');
    Ulchildren.textContent = app;
    newUl.appendChild(Ulchildren);
}

//Iteración 7
let sacrifices = document.querySelectorAll('.fn-remove-me');
for (const sacrifice of sacrifices) {
    sacrifice.remove();
}

//Iteración 8
let middleP = document.createElement('p');
middleP.textContent = 'Voy en medio!';
document.body.insertBefore(middleP, createDiv);

//Iteración 9

let allContainers = document.querySelectorAll('div.fn-insert-here');
for (const container of allContainers) {
    let innerP = document.createElement('p');
    innerP.textContent= 'voy dentro!';
    container.appendChild(innerP);
}

