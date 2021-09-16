var upper = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lower = "abcdefghijklmnopqurstuvwxyz";

function charToLower(char) {
  var output = "";
  for (var i = 0; i < upper.length; i++) {
    if (char == upper[i]) {
      output += lower[i];
      return output;
    }
  }
  return char;
}
function charToUpper(char) {
  var output = "";
  for (var i = 0; i < lower.length; i++) {
    if (char == lower[i]) {
      output += upper[i];
      return output;
    }
  }
  return char;
}

function stringSwap(string) {
  var output = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] == charToUpper(string[i])){
      output += charToLower(string[i]);
    }
    else if(string[i] == charToLower(string[i])){
      output += charToUpper(string[i])
    }
  }
  return output;
}

console.log(stringSwap("Test"));
