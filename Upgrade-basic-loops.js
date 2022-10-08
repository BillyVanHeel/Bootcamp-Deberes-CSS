//Iteración 1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    const garment = products[i];
    if(garment.includes('Camiseta')===true){
        console.log((products.indexOf(garment)+1) + ': '+garment);
    }
}

