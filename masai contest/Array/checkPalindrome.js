var N = 4;
var str = ["n","a","n","s"];


var x = true;
for (var i = 0; i < N / 2; i++) {
  
  if (str[i] !== str[N - i - 1]) {

    x = false;
    
    break;
  }
}
if (x){
  console.log("Yes");
}

else{
console.log("No");
  
} 
