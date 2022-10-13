//Iteración 1
console.log('\n'+'---Iteración 1---'+'\n');

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log("Highest number is " + sum(23, 34));

//Iteration 2
console.log('\n'+'---Iteración 2---'+'\n');

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(array) {
  let longestWord = "";

  for (const element of array) {
    if (longestWord.length < element.length) {
      longestWord = element;
    }
  }
  return longestWord;
}

console.log(
  "The avenger with the longest name is" + " " + findLongestWord(avengers)
);

//Iteration 3
console.log('\n'+'---Iteración 3---'+'\n');

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log("all the numbers together equal " + sumAll(numbers));

//Iteración 4
console.log('\n'+'---Iteración 4---'+'\n');

const factors = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result = (sum += array[i]) / array.length;
  }
  return result;
}
console.log("The average of the numbers is " + average(factors));

//Iteración 5
console.log('\n'+'---Iteración 5---'+'\n');

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      sum += array[i].length;
    } else if (typeof array[i] == "number") {
      sum += array[i];
    }
  }
  return sum;
}
console.log(averageWord(mixedElements));

//Iteración 6
console.log('\n'+'---Iteración 6---'+'\n');

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(i, 1);
        j--;
      }
    }
  }
  return array;
}
console.log(removeDuplicates(duplicates));

//Iteración 7
console.log('\n'+'---Iteración 7---'+'\n');

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(array, name){
  let result = false;
for (let element of array){
  if(name === element){
  result = element + ': ' + ((array.indexOf(element))+1);
}} 
return result;
}

 console.log(finderName(nameFinder, 'Peggy'));
 console.log(finderName(nameFinder, 'Eustaquio'));
 
//iteración 8
console.log('\n'+'---Iteración 8---'+'\n');

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element in result) {
      result[element]++;
    } 
    else {
      result[element] = 1;
    } 
  }
  return result;
}

console.log(repeatCounter(counterWords));
