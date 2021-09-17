/*
Write a custom function that has the same behaviour of inbuilt String Replace Function
*/

function stringReplace(str, toReplace, withStr) {
  var ans = "";
  var count = 0
  for(var i=0; i<str.length; i++) {
    if(str[i] == toReplace[0] && count == 0) {
      var temp = "", currString = "";
      var k = 0;
      var j = i;
      //I am in iron iron -> str
      //iron -> toReplace
      //rust -> withStr
      //output -> I am rust iron
      for(k=0; k<toReplace.length; k++) {
        if(str[j] == toReplace[k]) {
          temp+=str[i];
        } else {
          currString += str[j];
          break;
        }
        currString += str[j];
        j++;
      }
      
      if(temp.length == toReplace.length) {
        count++;
        ans += withStr
      } else {
        ans += currString;
      }
      i=j-1;

    } else {
      ans += str[i];
    }
  }
  return ans;
}
const p = 'The quick  dog in dog.';
console.log(stringReplace(p,'dog','monkey'));
