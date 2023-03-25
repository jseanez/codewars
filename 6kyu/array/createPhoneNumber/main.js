// function createPhoneNumber(numbers){
  
// }
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// Parameters
// Array of 10 integers that are between 0 and 9. 


// Return
// A string of the numbers in the array in the format of a phone number. "(123) 456-789"


// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// Pseudo Code
// Add ( to the 0 index of the numbers array and ) to the 4th index of the numbers array. Add " " to the 5th index of the numbers array. Add - to the 9th index of the array. Then return the array as string with .join('')
function createPhoneNumber(numbers){
    numbers.splice(0,0,'(')
    numbers.splice(4,0,')')
    numbers.splice(5,0,' ')
    numbers.splice(9,0,'-')
    return numbers.join('')
  }

