// function solution(number){
  
// }
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Parameters
// Single integer number. 

// Return
// The sum of all of the numbers below the inputed number that are multiples of 3 and 5.

// Example
// function solution(10) => 3 + 5 + 6 + 9 = 23

// Pseudo Code
// I can use a for loop to loop through each number up to the input number. This will let me check each number below the input and see if it is a multiple of 3 or 5. I can create an empty array to store these numbers that are multiples of 3 or 5. Then I can use reduce to sum all of those numbers and return the answer