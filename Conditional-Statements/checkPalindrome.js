var N = 7;


var str = "nasa man";
var rev = "";

var ar = str.split("");
for(var i=N-1; i>=0; i--) {
  rev+=ar[i];
}
  
if(str == rev){
   console.log("yes");
}
else{
  console.log("no");
} 



//2nd solution without using array.

var N = 7;
var str = "naamaan";
var rev = "";

for (i = N-1; i >= 0; i--) {
  rev =rev + str[i];
  
}  
if(str == rev){
   console.log("yes");
}
else{
  console.log("no");
} 
