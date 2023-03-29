// function oddOrEven(array) {
//    //enter code here
// }
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// Parameters
// An array of integers, If the array is empty consider its value as 0.



// Return
// "even" if the sum of all the numbers in the array is even and "odd" if the sum of all the numbers in the array is odd.




// Example
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"




// Pseudo Code
// First check if the arr is empty and return 'even' if that is the case. After checking for that I will use the reduce method to find the sum of the array and store it check if it is even or odd and return "even" or "odd using a ternary"

function oddOrEven(array) {
    if(array.length == 0){
      return "even"
    }
   let sum = array.reduce((acc, cv)=> acc + cv,0) 
   return sum % 2 == 0 ? "even" : "odd"
 }