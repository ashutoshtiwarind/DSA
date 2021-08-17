//find minimum number in an array

var arr = [11,21,3,40,5];

var min = arr[0];

for (var i = 1; i < arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
    
  }
}
console.log(min); 
