// Question - Write a function that checks whether a given string is a palindrome (same forward and backward)

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("jahaj"));

function reversString(str) {
  return str.split("").reverse().join("");
}
console.log(reversString("iahud mar"));

// function sameInReverse(str){
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reverse().join("");
// }
// console.log(sameInReverse("maram"));

function sameInReverse(str) {
  const cleanedstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanedstr.length - 1;

  while (left < right) {
    if (cleanedstr[left] !== cleanedstr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(sameInReverse("maram"));
console.log(sameInReverse("aram"));
console.log(sameInReverse("naram"));
