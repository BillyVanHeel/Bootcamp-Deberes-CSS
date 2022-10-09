//Iteración 1
console.log('\n'+'---Iteración 1---' +'\n');

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const genres=[]

for (const movie of movies) {
    for (const category of movie.categories) {
        if(!genres.includes(category)){
            genres.push(category); 
        }
       
    }
}

console.log(genres);

//Iteración 2
console.log('\n'+'---Iteración 2---' +'\n');

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const volumeInfo = { totalVolume: 0, totalCount: 0 };

for (const user of users) {
  for (const key in user.favoritesSounds) {
    const favoriteSound = user.favoritesSounds[key];
    volumeInfo.totalVolume += favoriteSound.volume;
    volumeInfo.totalCount++;
    
  }
}
    console.log(volumeInfo.totalVolume/volumeInfo.totalCount);

//Iteración 3
    console.log('\n'+'---Iteración 3---' +'\n');

    let soundCount = {};
    for (const user of users) {
        for (const sound in user.favoritesSounds) {
            if (sound in soundCount){
                soundCount[sound]++;
            }
            else{
                soundCount[sound] = 1;
            }
                
            }
        }
    console.log(soundCount);

//Iteración 4
    console.log('\n'+'---Iteración 4---' +'\n');


        function findArrayIndex(array, text) {
            for (const element of array) {
                if(text === element)
              

            console.log(text+ ': ' + (array.indexOf(text)+1));
        } }

        findArrayIndex(['Cassandra', 'Dorian', 'Iron Bull', 'Cole', 'Leliana', 'Varric'], 'Leliana');
        findArrayIndex(['Aloy', 'Nil', 'Inatut', 'Vanasha', 'Petra', 'Erend', 'Sylens'], 'Nil');

//Iteración 5
console.log('\n'+'---Iteración 5---' +'\n');

        function rollDice (max){
        return Math.floor(Math.random()* ((max -1 ) + 1) + 1);
        }
        
        console.log('The dice rolls' + ' ' + rollDice(6));
        console.log('The two dices roll' + ' ' + rollDice(12));


//Iteración 6
        console.log('\n'+'---Iteración 6---' +'\n');

function swap(array, element1, element2){
        let change = array[element1];
        array[element1] = array[element2];
        array[element2] = change;
    
    return array;
}
const guardians = ['Tidus', 'Wakka', 'Rikku', 'Kimahri', 'Lulu', 'Auron'];

console.log(swap(guardians, 0, guardians.length - 1));