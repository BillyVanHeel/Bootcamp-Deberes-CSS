//Iteración 1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    const garment = products[i];
    if(garment.includes('Camiseta')===true){
        console.log((products.indexOf(garment)+1) + ': '+garment);
    }
}

//Iteración 2

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((pupil) => {
    if ((pupil.T1===true && pupil.T2===true)||(pupil.T1===true && pupil.T3===true)||(pupil.T2===true && pupil.T3===true)) {
    pupil.isApproved = true;
    }
    else{
        pupil.isApproved = false;
    }
  });

    console.log(alumns);

//Iteración 3

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const country of placesToTravel) {
    console.log((placesToTravel.indexOf(country)+1) +') '+country);
}
