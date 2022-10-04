//Iteración 1

//1.1
let myFavoriteHero='Hulk';
console.log(myFavoriteHero);

//1.2
let x=50;
console.log(x);

//1.3
let h=5;
console.log(h);
let y=10;
console.log(y);

//1.4
let z= h + y;
console.log(z);

//Iteración 2

//2.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

//2.2
let firstName='Jon';
let lastName='Snow';
let age=24;
console.log('Soy '+firstName+' '+lastName+'. Tengo '+age+' años, y me gustan los lobos.');

//2.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log( toy1.price + toy2.price);

//2.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice=25000;
car1.finalPrice= car1.basePrice + globalBasePrice;
car2.finalPrice= car2.basePrice + globalBasePrice;

console.log( car1);
console.log(car2);

//Iteración 3

//3.1
console.log(10*5);

//3.2
console.log(10/2);

//3.3
console.log(15 % 9);

//3.4
z=5;
x=(y+z);
console.log(x);

//3.5
x=(y*z);
console.log(x);

//Iteración 4

//4.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//4.2
avengers[0]="IRONMAN";
console.log(avengers);

//4.3
console.log(avengers.length);

//4.4
const rickAndMortyCharacters =["Rick", "Beth", "Jerry"]
rickAndMortyCharacters.push ("Morty", "Summer");
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.push("Lapiz Lopez");

//4.5
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//4.6
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);

//Iteración 5
const number1=10;
const number2=20;
const number3=2;

if(number2/number1== 2){
    console.log('number2 dividido entre number1 es igual a 2');
}
if( number1 !== number2){
    console.log('number1 es estrictamente distinto a number2');
}
if(number3 != number1){
    console.log('number3 es distinto a number1');
}
if(number3*5==number1){
    console.log('number3 por 5 es igual a number1');
}
if(('number3 por 5 es igual a number1')&&(number1*2==number2)){
    console.log('number3 por 5 es igual a number1 Y number1 por 2 es igual a number2');
}
if((number2/2==number1)||(number1/5==number3)){
    console.log('number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3');
}

//Iteración 6

//6.1
for (let i=0; i<=9; i++){
    console.log(i);
}

//6.2
for (let i=0; i<=9; i++){
    if(i % 2==0){
    console.log(i);    
    }
} 

//6.3
for (let i=0; i<=10; i++){
    if(i<=9){
        console.log('Intentando dormir...');
    }
    if(i==10){
        console.log('Dormido!');
    }
}