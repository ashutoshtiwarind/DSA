/*
https://www.hackerrank.com/challenges/js10-let-and-const/problem
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

function main() {
   
   let r = readLine();
   const PI = Math.PI;
    
    // Print the area of the circle:
    var areaOFCircle = PI * r * r;
    console.log(areaOFCircle);
    
    // Print the perimeter of the circle:
    var perimeterOfCircle = PI * 2 * r;
    console.log(perimeterOfCircle);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
