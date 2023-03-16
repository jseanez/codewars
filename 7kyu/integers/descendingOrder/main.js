// function descendingOrder(n){
//   //...
// }
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Parameters
// Any non-negative integer.

// Return
// The integers sorted from greatest to least


// Example
// descendingOrder(50256) => 65520


// Pseudo Code
// Put the numbers into an array so I can use .sort() method on them and then reverse that array so it is descending. After this use .map(Number) on the array to return the sorted integers.
function descendingOrder(n){
    let arr = n.toString().split('').map(Number);
    let srtArr = arr.sort().reverse();
    return parseInt(srtArr.join(''));
  }