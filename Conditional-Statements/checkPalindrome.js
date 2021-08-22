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

