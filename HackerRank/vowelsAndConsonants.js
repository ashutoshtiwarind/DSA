//1st code
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    var cons = "";
    
    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
        else cons = cons + v + '\n';
    }
      console.log(cons);
}

//2nd code
function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u"){
            console.log(s[i])
            
        }
    }
    for (var j = 0; j < s.length; j++) {
        if (s[j] != "a" && s[j] != "e" && s[j] != "i" && s[j] != "o" && s[j] != "u"){
            console.log(s[j])
            
        }
    }
}


//3rd code

    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }
