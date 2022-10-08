let coin = ['heads', 'tails'];

function headsOrTails (array){
    result = Math.floor(Math.random()*array.length);
    return array[result];
}
console.log('The coin says ' + headsOrTails(coin));
    