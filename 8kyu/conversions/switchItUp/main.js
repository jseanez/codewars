// function switchItUp(number){
// //Write your own Code!
// }
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// The input number will always be between 0 and 9 and be a single number. I want to return that number in written out form as a string.

// The only way right now I can think of solving this is switch case or a long if else statement
function switchItUp(number){
    switch(number) {
        case 9:
          return "Nine";
          break;
        case 8:
          return "Eight";
          break;
        case 7:
          return "Seven";
          break;
        case 6:
          return "Six";
          break;
        case 5:
          return "Five";
          break;
        case 4:
          return "Four";
          break;
        case 3:
          return "Three";
          break;
        case 2:
          return "Two";
          break;
        case 1:
          return "One";
          break;
        case 0:
          return "Zero";
          break;
    }
  }