// function cockroachSpeed(s) {
//     //Good Luck!
// }
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// Parameters
// The input will be a real number that is greater than or equal to zero. 

// Return
// The prompt is clear that it wants the result to just be an integer without the units attached to the end of it. 

// Example 
// cockroachSpeed(2) = cm/s = 2 / 0.036 = 55.55 cm/s

// Psuedo Code
// Take in the input which is in km/ph (s), return s divided by 0.036 which will convert it to cm/s. Next, take that output and run it
// through the Math.floor(output), which will round it down to the nearest integer. And since the input is being divided by .036 if the
// input is 0 it won't cause the function to break.
function cockroachSpeed(s) {
    return Math.floor(s / 0.036)
}