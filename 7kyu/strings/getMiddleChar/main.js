// function getMiddle(s)
// {
//   //Code goes here!
// }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// Parameters
// A string of length 0 to 1000. Unclear if the words have any spaces or special characters in them. Going to assume that they don't at first and troubleshoot later if they do.

// Return
// The characters in the middle of the input string, these should be returned as a string


// Examples
// getMiddle("Word") = "or"
// getMiddle("get") = "o"


// Pseudo Code
// First I need to determine if the string has an odd or even length. This can be achieved using the str.length() property. After I know its length in numerical form I can divide this by 2 and see if the remainder is 0 to see if it is even or odd. If the word is odd then the return should be 1 character and if even it should be the middle 2 characters. 

// If the string has an odd number of characters I can divide its length by 2 and round down the remainder to get the index of the middle character. And use .slice() to get that character. 

// If the string has an even number of characters I can divide its length by 2 and subract 1 from that number to get the index of the middle 2 characters. Then using slice() I can take out the characters like this. .slice((str.length / 2) - 1, str.length / 2)

function getMiddle(s)
{
  if(s.length % 2 != 0){
    return s.charAt(Math.floor((s.length) / 2))
  }else{
    return s.slice(s.length / 2 - 1, s.length / 2 + 1)
  }
}

