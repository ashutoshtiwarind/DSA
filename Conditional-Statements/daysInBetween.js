/*
Days In Between

Given two dates in a nonleap year. Find the no of days in between them (excluding the given dates)
Sample Input - 31-7 (31st July) & 4-8 (4th Aug)
Sample Output - 3 (1st Aug, 2nd Aug, 3rd Aug)
*/

var sMonth = 2;
var sDay = 25;
var eMonth = 4;
var eDay = 5;

var nOfDays = 0;
for(var i=sMonth; i<=eMonth; i++) {
  if(i==2) {
    if(i==sMonth && i==eMonth) {
      nOfDays += (28 - sDay) - 1; 
    } else if(i==sMonth) {
      nOfDays += 28 - sDay;
    } else if(i==eMonth) {
      nOfDays += eDay - 1;
    } else {
      nOfDays += 28;
    }

  } else if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12) {

    if(i==sMonth && i==eMonth) {
      nOfDays += (31 - sDay) - 1; 
    } else if(i==sMonth) {
      nOfDays += 31 - sDay;
    } else if(i==eMonth) {
      nOfDays += eDay - 1;
    } else {
      nOfDays += 31;
    }

  } else {
    if(i==sMonth && i==eMonth) {
      nOfDays += (30 - sDay) - 1; 
    } else if(i==sMonth) {
      nOfDays += 30 - sDay;
    } else if(i==eMonth) {
      nOfDays += eDay - 1;
    } else {
      nOfDays += 30;
    }
  }
}

console.log(nOfDays);
