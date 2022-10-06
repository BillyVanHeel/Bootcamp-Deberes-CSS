//Iteración 1
function sum(numberOne, numberTwo){
    if(numberOne > numberTwo){
        return numberOne;
    }
    else{
        return numberTwo;
    }
}
console.log('Highest number is ' + sum(23, 34));

//Iteration 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array){

let longestWord = "";

for(const element of array){
    if(longestWord.length < element.length){
        longestWord=element;
    }
}   return longestWord;
}

console.log(findLongestWord(avengers));

//Iteration 3

const numbers=[1,2,3,5,45,37,58];

function sumAll(array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum;
}

console.log(sumAll(numbers));

//Iteración 4

const factors = [12, 21, 38, 5, 45, 37, 6];

function average(array){
    let sum=0;
    let result=0;
 for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result=(sum+=array[i])/array.length;
 }
 return result
}
console.log(average(factors));

//Iteración 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i]=='string'){
            sum+=array[i].length;
        }
        else if (typeof array[i]=='number'){
            sum+=array[i];
        }
        
    }
    return sum;
}
console.log(averageWord(mixedElements));

//Iteración 6


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i +1; j < array.length; j++) {
           if (array[i] === array[j]){
            array.splice(j,1);
            j--;
           }
        }
        
    }
    return array
  }
 console.log(removeDuplicates(duplicates));

//Iteración 7

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, element){
    for (let i = 0; i < array.length; i++) {
        array.indexOf(i, 0);
    
    } 
  return array.indexOf(element, 0);
}
console.log(finderName (nameFinder, 'Jessica'));