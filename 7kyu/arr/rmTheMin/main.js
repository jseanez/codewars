// function removeSmallest(numbers) {
//     return [];
//   }
//   The museum of incredible dull things
//   The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
  
//   However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
  
//   Task
//   Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
  
//   Don't change the order of the elements that are left.
  
//   Examples
//   * Input: [1,2,3,4,5], output = [2,3,4,5]
//   * Input: [5,3,2,1,4], output = [5,3,2,4]
//   * Input: [2,2,1,2,1], output = [2,2,2,1]

// Parameters
// An array of integers, There can be multpile elements with the same value and empty arrays. 


// Return
// The orignial array without its lowest value. If there are multiple elements with the lowest value then the first instance of that lowest element should be




// Examples
//   * Input: [1,2,3,4,5], output = [2,3,4,5]
//   * Input: [5,3,2,1,4], output = [5,3,2,4]
//   * Input: [2,2,1,2,1], output = [2,2,2,1]




// Pseudo Code
// First I want to know the value of the lowest element. This can be achieved with a Math.min() method on the original array with ..., After I know the value of the lowest number I can find its index with the indexOf(e=> e === lowestVal) which will return the index of the first occurance of that lowest value. Once I know the index of the lowest value I can use the slice method to slice the lowest index out of the array and attach the rest of the array to the end of the modified array. 