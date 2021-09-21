function longestIncSubArr(n, arr) {
  var longest = 1;
  var count = 1;
  
  for(var i = 1; i < arr.length; i++) {
    if(arr[i-1] < arr[i]) {
      count++;
    } else {
      count = 1;
    }
    
    if(count > longest) {
      longest = count;
    }
  }
  
  console.log(longest);
}
