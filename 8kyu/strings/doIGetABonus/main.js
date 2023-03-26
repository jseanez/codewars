// function bonusTime(salary, bonus) {
//     // your code here
//     }

//     It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

//     Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
    
//     If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
    
//     Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// Parameters
// Salary which will be an integer. And bonus which is a boolean(y/n).


// Return
// Since I am using JS the return should be prefixed with "£". If the bonus is true, then the salary should be multiplied by 10. If it is false then only the salary should be returned. And the returned salary in both cases should be a string with the prefix of "£".


// Examples
// function bonusTime(salary, bonus) {
//     // your code here
//     }
// bonusTime(20000, true) = "£200000"


// Pseudo Code
// First I will check if the bonus boolean is true then create a ternary operator that either returns the salary * 10 with the prefix of £, or just the salary with the prefix of £. And in both ternary outcomes I must turn the salary from a number to a string and concatenate the £ to the start of the string.
    
    