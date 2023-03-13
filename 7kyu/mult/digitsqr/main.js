// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    let myArr = String(num).split("").map((num)=>{
        return Number(num) * Number(num)
      })
    return Number(myArr.join(''));
}


// Parameters
// Integers, unclear if they are only whole numbers or float numbers or a mix of both

// Return
// Should return an integer that is a concatenated string of the squares of every digit in the input 

// Examples
// squareDigits(765) = 7^2 + 6^2 + 5^2 = 49 + 36 + 25 = "493625"

// Pseudo Code
// I need to take each integer in the input which is a number and seperate them. Ideally I would do this by putting each number in the input into an array. Then running a forEach loop for each element on the array and squaring them. After that I would be left with an array of the squared numbers for each digit. Then I would have to .join(' ') the array into a string which should concatenate it and then run Number() on the string to turn it into an integer.



