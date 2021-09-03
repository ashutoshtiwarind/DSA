/*
https://www.hackerrank.com/challenges/js10-function/copy-from/231647399
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function factorial(n) {
    var fact = 1;
    for (var i = n; i >= 1; i--) {
        fact = fact * i;
        
    }    
    return fact;        
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
