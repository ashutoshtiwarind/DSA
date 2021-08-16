var num = 12;

for (i = 0; i < num; i++){
  var output = "";
  
  for(j = 0; j < num; j++){
    if(i == 0 || j ==0 || j == num-1 || i == num-1 ){
      output = output + "* ";
    }
    else{
  
      output = output +"  ";
    }
   
  }
  console.log(output);
}



//output :

// * * * * * * * * * * * * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// *                     * 
// * * * * * * * * * * * * 
