function swapOddEvenElements(N,arr){
    //write code here
  var output = "";
  
  for (var i = 0; i < N; i = i+2) {
    var temp = arr[i];
    arr[i] = arr[i+1];
    
    arr[i+1] = temp;
  }
  for (var i = 0; i < N; i++) {

  output += arr[i] + " ";
  }
  console.log(output);

}
