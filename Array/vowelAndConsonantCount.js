var str = "ash";
var vowel_count = 0;
var consonant_count = 0;

for (i = 0; i < str.length; i++) {
  if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
    vowel_count++;
    console.log("vowel_count " + i + " " + vowel_count);
  }
  if (str[i] != "a" || str[i] != "e" || str[i] != "i" || str[i] != "o" || str[i] != "u") {
    consonant_count++;
    console.log("consonant_count " + i + " " + consonant_count);
  }
}
console.log(vowel_count + " " + consonant_count);
