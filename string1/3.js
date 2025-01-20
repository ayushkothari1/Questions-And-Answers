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
