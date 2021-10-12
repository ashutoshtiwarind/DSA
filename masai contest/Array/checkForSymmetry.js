/*
https://oj.masaischool.com/contest/2109/problem/05
*/
function check_for(n,arr) {
    var h = true;
    var v = true;
    for (var r = 0; r <Math.floor(n/2); r++) {
        var up = "";
        var down = "";
        for (var c = 0; c< n; c++) {
            up += arr[r][c];
            down += arr[n-r-1][c];
            
        }
        if (up != down){
            h = false;
        }
    }
    for (var r = 0; r < Math.floor(n/2); r++) {
        var left = "";
        var right = "";
        for (var c = 0; c< n; c++) {
            left += arr[c][r];
            right += arr[c][n-r-1];
            
        }
        if (left != right){
            v = false;
        }
    }
    if(h&&v) {
        console.log("BOTH");
    } else if(h) {
        console.log("HORIZONTAL")
    } else if(v) {
        console.log("VERTICAL")
    } else {
        console.log("NO")
    }
}

function runProgram(input) {
  input = input.split('\n');
  var t = +input[0];
  
  var line = 1;
  for (var i = 0; i < t; i++) {
      var n = +input[line]
      line++
      var arr = []
        for(var j = 0; j < n; j++){
            arr.push(input[line].split(""))
        line++
        }
        check_for(n, arr)
  }
  
  
  
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
