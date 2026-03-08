// Build a Pyramid Generator

// You should have a function named pyramid that takes three arguments.
// The first argument should be a string representing the pattern character to repeat in your pyramid.
// The second argument should be an integer representing the number of rows in the pyramid.
// The third argument should be a Boolean value.

function pyramid(pattern, rowsN, IsTrue) {
  let result = "\n";
  for (let i = 0; i < rowsN; i++) {
    let numChars, numSpaces;
    if (IsTrue) {
      numChars = (rowsN - i) * 2 - 1;
      numSpaces = i;
    } else {
      numChars = i * 2 + 1;
      numSpaces = rowsN - i - 1;
    }
  }
  result += " ".repeat(numSpaces) + pattern.repeat(numChars) + "\n";
  return result;
}

console.log(" ".repeat(9) + "akash".repeat(4));
