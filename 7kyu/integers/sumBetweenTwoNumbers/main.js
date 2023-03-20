// function getSum(a, b)
// {
//    //Good luck!
// }
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


// Parameters
// 2 numbers a and b, they can both be negative or positive. 

// Return
// If a is equal to b, return a or b. Else you should return the sum of all the numbers between a and b. 

// Example
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Pseudo Code
// First I will sort a and b. I will assign a to be the lowest number and b to be the highest number. After that I will check if they equal each other and return them if they do. If they don't equal each other I will make a loop from a to b that will add 1 to a and run until a = b, then I will return that value.
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
