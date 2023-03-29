// function minMax(arr){
//   return [0,0]; // fix me!
// }
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
// Parameters
// An array of at least 1 element that is a number. The numbers can be positive or negative or 0.



// Return
// An array of 2 numbers from the orginal array. With the lowest value in the 0th index and the highest value in the 1st index. If the array contains just 1 number then just return it as an array of itself twice.




// Example
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]       




// Pseudo Code
// First check if arr.length = 1 then return an array of [arr[0], arr[0]]. After checking for that I will use the .sort method to sort the array from least to greatest and return [sortArr[0], sortedArr[sortedArr.length - 1]]. This isn't the most time effiecient way to solve this problem as it has a linear time complexity. 

function minMax(arr){
  if(arr.length == 1){
    return [arr[0], arr[0]]
  }
  let sortedArr = arr.sort((a,b)=> a - b)
  return [sortedArr[0], sortedArr[sortedArr.length - 1]]
}