//Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).
function factorial(n) {
    var fact = 1;
    for (var i = n; i >= 1; i--) {
        fact = fact * i;
        
    }    
    return fact;        
}
