//Quiz #1
for (let i = 30; i >= -10; i-=2) {
    console.log(i);
    
}
//Quiz #2
for (let j = 100; j > 10; j/=2) {
    console.log(j);
    
}
//Quiz #3
for (let k = 1.01; k < 1000; k*=2) {
    console.log(k);;
    
}

//Quiz #4

let pyramid="";

for (let m=0; m < 10; m++){
    for (let n= 0; n < m; n++){
        pyramid += "*";
    }
    pyramid += "\n";
}
console.log(pyramid);