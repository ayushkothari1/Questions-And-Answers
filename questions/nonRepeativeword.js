// Find the first non-repeating character in a string.

let str = "ASMAN";

function nonRepeative(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(nonRepeative("amayan"));

// or

function nonReap(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}
console.log(nonReap("ahnumat"));
