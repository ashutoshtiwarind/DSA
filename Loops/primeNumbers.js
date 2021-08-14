var limit = 20;
var count = 0;
for (number = 1; number <= limit; number++){
  count = 0;
  for (i = 1; i <= number/2; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 1){
    console.log(number);
  }
}
