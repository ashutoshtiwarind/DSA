var arr = [1,21,3,40,5];
var max = arr[0];
for (var i = 1; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
    
  }
}
console.log(max); 
