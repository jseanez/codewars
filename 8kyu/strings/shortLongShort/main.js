// function solution(a, b){
//     // your code here
//   }
//   Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

//   Hint for R users:
  
//   The length of string is not always the same as the number of characters
//   For example: (Input1, Input2) --> output
  
//   ("1", "22") --> "1221"
//   ("22", "1") --> "1221"


// Parameters
// Two strings of different length. One of the two strings may be empty though


// Return
// The strings rearranged in the format of shortString + longString + shortString


// Example 
//   ("1", "22") --> "1221"
//   ("22", "1") --> "1221"



// Pseudo Code
// Create two variables that hold the short and long string. Then concatenate them correctly and return the single string.
function solution(a, b){
    let shortString, longString;
    if(a.length > b.length){
      shortString = b;
      longString = a;
    }else{
      shortString = a;
      longString = b;
    }
    return shortString + longString + shortString
  }
  