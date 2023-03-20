// String.prototype.toJadenCase = function () {
//     //...
// };

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Parameters
// Strings that are seperated by a space and lowercase. 

// Return 
// The first letter of each word in the string to be uppercase

// Example
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Pseudo Code
// Take the input string and split it into an array. Then target the first letter of each element in the array with toUpperCase. After that I will .join() the array into a string.
String.prototype.toJadenCase = function () {
    var str = this;
    let arr = str.split(' ');
    let casedArr = arr.map((e)=>{
      return e.charAt(0).toUpperCase()+e.slice(1)
    })
    return casedArr.join(' ')
  };
  