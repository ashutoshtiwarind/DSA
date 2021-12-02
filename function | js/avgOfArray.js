function avgOfArray(array) {
  var sum = 0;
  var count = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    count++;
  }
  
  if(array.length == 0) {
    return 0;
  }
  else{
    var avg = sum / count;
    return avg;
  }
}
console.log(avgOfArray([]))
