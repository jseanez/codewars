function highAndLow(numbers){
    let sortedArr = numbers.split(' ').sort((a,b)=> a - b);
    let greatestVal = sortedArr.pop();
    let leastVal = sortedArr.shift();
    if(!greatestVal){
      return leastVal + " " + leastVal;
    }else if(!leastVal){
      return greatestVal + " " + greatestVal;
    }else{
      return greatestVal + " " + leastVal;
    }
  }
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Parameters 
// String of space separated numbers, numbers are whole numbers. Always atleast 1 number in the input string.

// Return
// Return must be 2 numbers separated by a single space with the highest number first. 


// Examples
// highAndLow("1 2 3 4 5") = "5 1"

// Pseudo Code
// In order to sort from least to greatest I need to turn the input string into an array using .split() after this I must sort the array from least to greatest using .sort(), after the array is sorted least to greatest I can store the least and greatest value of the array by storing them in a variables using .pop() and .shift(). Then combining those 2 variables into 2 numbers separated with a single space with the highest number first.
