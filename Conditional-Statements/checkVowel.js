var b = false;
var str = "htatttyy";
var regex = /[aeiou]/;
for(var i=0; i<str.length; i++) {
  if(regex.test(str[i])) {
    b = true;
    break;
  }
}
if(b) {
  console.log(b +" hai");
}
else console.log(b + " hai");
