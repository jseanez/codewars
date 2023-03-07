function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}
// Parameters
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
// Only integer numbers are in each array.


// Return
// The problem asks for the sum of all elements in each array. The output should just be a number and not an array.

// Example I/O
// arr1 = [1,3,6], arr2 = [2,4,4]
// arrayPlusArray(arr1, arr2) should equal 20

// Pseudo Code
// function arrayPlusArray(arr1, arr2) {
//     return arr1 + arr2; //something went wrong
// }
// The issue is that the output is asking for just a number. So when you just return the sum of 2 arrays you will get back an array. 
// In order to fix this I will use the reduce method on both arrays and then sum the results of those 2 reduce methods.
// The reduce method can sum each array can return the sum as a single number and not an array. Then a simple + operator will return the 
// sum of both arrays.

