console.log('\n'+'---Iteración 1---'+'\n');

const products = [
    'Camiseta de Pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    const garment = products[i];
    if(garment.includes('Camiseta')===true){
        console.log((products.indexOf(garment)+1) + ': '+garment);
    }
}

console.log('\n'+'---Iteración 2---'+'\n');

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((pupil) => {
    if ((pupil.T1===true && pupil.T2===true)
    ||(pupil.T1===true && pupil.T3===true)
    ||(pupil.T2===true && pupil.T3===true)) {
    pupil.isApproved = true;
    }
    else{
        pupil.isApproved = false;
    }
  });

    console.log(alumns);

    console.log('\n'+'---Iteración 3---'+'\n');

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const country of placesToTravel) {
    console.log((placesToTravel.indexOf(country)+1) +') '+country);
}

console.log('\n'+'---Iteración 4---'+'\n');

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const property in alien) {
    console.log(property + ': ' + alien[property]);
}

console.log('\n'+'---Iteración 5---'+'\n');

const placesToVisit = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
    ]

for (let i = 0; i < placesToVisit.length; i++) {
    let destination = placesToVisit[i];
    if(destination.id !== 11 && destination.id !== 40){
        console.log(destination);
    }}

    console.log('\n'+'---Iteración 6---'+'\n');

    const toys = [
        {id: 5, name: 'Buzz MyYear'}, 
        {id: 11, name: 'Action Woman'}, 
        {id: 23, name: 'Barbie Man'}, 
        {id: 40, name: 'El gato con Guantes'},
        {id: 40, name: 'El gato felix'}
        ]

    for (let i = 0; i < toys.length; i++) {
        const toy = toys[i];
        if(toy.name.includes('gato')===false){
            console.log(toy);
        }   
    }