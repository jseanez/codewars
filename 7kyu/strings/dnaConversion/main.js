// function DNAStrand(dna){
//     //your code here
//   }
//   Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

//   If you want to know more: http://en.wikipedia.org/wiki/DNA
  
//   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
  
//   More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
  
//   Example: (input --> output)
  
//   "ATTGC" --> "TAACG"
//   "GTAT" --> "CATA"
  

// Parameters
// String of DNA symbols. Can never be empty.

// Return
// The complements of each DNA symbols. "A" -> "T", "G" -> "C"


// Example
//   Example: (input --> output)
  
//   "ATTGC" --> "TAACG"
//   "GTAT" --> "CATA"

// Pseudo Code
// Turn the string into an array and iterate through that array swapping out complements. Then return the array turned into a string.
function DNAStrand(dna){
    let arr = dna.split('');
    let convertedArr = arr.map((e)=>{
      if(e==="A"){
        return "T";
      } else if(e==="T"){
        return "A";
      } else if(e==="C"){
        return "G"
      } else{
        return "C"
      }
    })
    return convertedArr.join('')
  }