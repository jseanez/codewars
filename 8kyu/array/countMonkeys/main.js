// function monkeyCount(n) {
//     // your code here
//     }
//     You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

//     As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
    
//     For example(Input --> Output):
    
//     10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//      1 --> [1]
    

// Parameters
// Integer of n.



// Return
// All of the numbers in an array up to that input number n, not including 0.



// Example
//     10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//      1 --> [1]



// Pseudo Code
// Declare an empty array, then loop through n and push numbers to that empty array until i = n.
function monkeyCount(n) {
    let monkeyArray = [];
    for(let i = 1; i <= n; i++){
      monkeyArray.push(i)
    }
    return monkeyArray
  }