// var isSquare = function(n){
//      return false; // fix me 
// }
// Given an integral number, determine if it's a square number: The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Parameters
// The test will always use some intefral number as a parameter. (posistive and negative)

// Return
// The function should return true if n is a perfect square number(the square of n is a whole number). If n isn't a perfect square then the function should return false. 

// Example
// isSquare(5) = false
// isSquare(4) = true

// Pseudo Code
// First I want to check if n is a perfect square number. To do this I will use the static method of Math.sqrt() to get the square root of n. Then inside a conditional statement I will check if the sqrt if a whole number using the modulus (remainder operator) to see if the remainder of the Math.sqrt(n) is 0 by dividing it by 1 and checking the remainder. And inside this same conditional statement I will make sure that the Math.sqrt(n) is a posistive number using && inside the first if statement. Then I will return true and write the else to return false.

var isSquare = function(n){
    if (Math.sqrt(n) % 1 === 0 && Math.sqrt(n) >= 0){
      return true;
    }
    else{
      return false;
    }
  }