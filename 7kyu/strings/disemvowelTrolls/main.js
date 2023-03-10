
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//Parameters
// uppercase and lowercase letters, special characters(!,?,etc...), 
//Return
//Want to return the orginal string with all of it's lowercase and uppercase vowels while not changing any other character in the string.
//Example
//("This WebsitE sUckS!!") => ("Ths Wbst sckS!!")
//Pseudo Code
//create an array of upper case and lower case vowels
//use this array to check if the string contains any of these vowels
//replace those vowels and remove the whitespace left from those vowels being removed
//return the string.
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!vowels.includes(char.toLowerCase())) {
        if (char === char.toUpperCase()) {
          result += char.toUpperCase();
        } else {
          result += char;
        }
      }
    }
    return result;
  }
  