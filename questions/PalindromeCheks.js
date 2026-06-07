// Palindrome check

// Example:

// "madam" → true
// "hello" → false

function palindrome(str) {
  let plstr = str.split("").reverse().join("");
  return plstr === str;
}

console.log(palindrome("rara"));
