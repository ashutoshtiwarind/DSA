let a = 3;  

let b = 5;
let flag_a = true;

for (i = 2; i < a; i++){
  
  if (a % i == 0) {
    flag_a = false;  
  }
}
for (i = 2; i < b; i++) {
  if (b % i == 0) {
    flag_a = false;  
  }
}
if (flag_a) console.log("True");
else console.log("False");
