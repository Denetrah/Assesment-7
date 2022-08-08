// 1.sumZero  Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
// runtime O(n^2)
let array=[2,-2,3,4,5]
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)


console.time() 
console.timeEnd()

// 2.uniqueCharacters
// runtime O(1)
// space O(n)
function unique(str) {
    return new Set(str).size == str.length;
  }
  
  console.log(unique('abc'));
  console.log(unique('aaaaabbbbbbddddddd'))



console.time() 
console.timeEnd()

// 3.Pangram Write a function to check a sentence to see if it is a pangram or not.
// contains every letter of the alphabet
// runtime O(n)
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("Sphinx of black quartz, judge my vow."))
console.log(isPangram("This is the last assesment of foundations!"))

// 4. LongestWord Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
// runtime O(n)
const find_Longest_Word = (arr) =>{
    let strLength=0
    for(i=0;i<arr.length;i++){
        if(arr[i].length>strLength){
            strLength=arr[i].length
        }
    }return console.log(strLength)
}
// O(n) time 
// O(n) space

find_Longest_Word(["rice", "recipe"]);
// // -> 6;

