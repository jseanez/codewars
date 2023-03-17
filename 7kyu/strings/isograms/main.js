// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
// function isIsogram(str){
    
//     }
// Parameters
// String with only letters, assume empty strings are isograms.

// Return
// True if string is an isogram, false the string isn't an isogram.

// Example
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// Pseudo Code
// I want to sort all of the characters in the string into an array so I can loop through that array and check if any elements in that array are sitting next to the same element. This would mean that the word isn't an isogram if it contains multiple letters in the same word. 
function isIsogram(str){
    str = str.toLowerCase();
         let len = str.length;
   
         let arr = str.split('');
   
         arr.sort();
         for (let i = 0; i < len - 1; i++) {
             if (arr[i] == arr[i + 1])
                 return false;
         }
         return true;
     }
 


 