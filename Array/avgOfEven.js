/*given numbers in an array print the average of even numbers.*/

var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 0;
var count = 0;
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0){
    count++;
    sum = sum + numbers[i];
    
  }

}
 console.log(sum/count);
