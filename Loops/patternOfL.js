var num = 3;
for (i = 1; i <= num; i++) {
  output = "";
  for (j = 1; j <= num; j++) {
    if (i == num) {
      output = output + "*" + ' ';
    }
    else {
      if (j == 1) {
        output = output + "*" + ' ';
      }
    }
  }
   console.log(output);
}

