function reverseTheValue(num) {
    // Write code here
    var reverse = 0;
  	while (num > 0) {
      reverse = reverse * 10;
      reverse = reverse + num % 10;
      num = Math.floor(num / 10);
    }
  
    console.log(reverse);
    

}
