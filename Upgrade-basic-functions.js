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