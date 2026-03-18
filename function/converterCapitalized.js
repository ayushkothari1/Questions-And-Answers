// Build a Title Case Converter
// create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

function converter(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(converter("ram ji ki nayya niyari"));

function titleCase(str) {
  let result = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return result;
}
