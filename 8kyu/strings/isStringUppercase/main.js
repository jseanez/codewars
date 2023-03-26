// String.prototype.isUpperCase = function() {
//     // your code here
//   }
//   Is the string uppercase?
//   Task
//   Create a method to see whether the string is ALL CAPS.
  
//   Examples (input -> output)
//   "c" -> False
//   "C" -> True
//   "hello I AM DONALD" -> False
//   "HELLO I AM DONALD" -> True
//   "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//   "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//   In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Parameters
// A string of characters. It can be empty and if it is empty then it counts as all caps.


// Return
// True if the input is all caps string, false otherwise.



// Examples
//   "c" -> False
//   " " -> True
//   "hello I AM DONALD" -> False
//   "HELLO I AM DONALD" -> True
//   "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//   "ACSKLDFJSGSKLDFJSKLDFJ" -> True



// Pseudo Code
// Since an empty string counts as true I will have to check for that. I can use a ternary to check if this === this.toUpperCase().

String.prototype.isUpperCase = function() {
    if(this === " "){
      return true;
    }else{
      return this == this.toUpperCase() ? true : false;
    }
  }