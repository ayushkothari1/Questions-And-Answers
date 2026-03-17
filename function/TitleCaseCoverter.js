//  function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

// "Web Development Is Awesome" is an example of a title cased string.

// You should have a titleCase function that takes a string as an argument.
// The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
// titleCase("I like to code") should return "I Like To Code".
// titleCase("javaScript is fun") should return "Javascript Is Fun".

let str = "ram";
let ram = str.capi;

function titleCase(str) {
  let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

console.log(titleCase("rammam alkfj;sjf FFFFF"));
