// function strCount(str, letter){  
//   //code here
// }
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// Parameters
// Two strings (str and letter). The first str can be empty and the letter will always have a length of 1. 


// Return
// A number which represents how many times letter appears in str.



// Example
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0



// Pseudo Code
// Loop through the string with a for loop that checks how many times str.charAt(i) is equal to letter. And everytime this is true I will add 1 to a count. At the end I will return the count. 
function strCount(str, letter){  
    let count = 0;
    for(let i = 0; i<str.length; i++){
      if(str.charAt(i) == letter){
        count++
      }
    }
    return count
  }