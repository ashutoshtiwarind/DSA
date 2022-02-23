/*
Binary to Decimal
Given any binary number convert it into decimal format
Sample Input - 10001  
Sample Output - 17
*/
function binaryToDecimal(number) {
  
  var sum = 0;
  var length = number.toString().length - 1;
  while (number > 0) {
    for (i = 0; i <= length ; i++){
      var digital = 0;
      digital = digital + number % 10;
      digital = (digital * 2) ** i;
      sum = sum + digital;
      number = Math.floor(number / 10);
    }
  }
  return sum;
}

console.log(binaryToDecimal(1101111));

