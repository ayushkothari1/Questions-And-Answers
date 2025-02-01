// Question1 - Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  // console.log("ram siya ram");
  return str.split("").reverse().join("");
}
// console.log(reverseString("enaj mar"));

function reverseDone(rvr) {
  return rvr.split("").reverse().join("");
}
// console.log(reverseDone("ram chahe mujhe raam chahe"));

// String Length: Write a function that returns the length of a string without using the .length property.

// function stringLength(str){
//   let length = 0;
//   for (const element of str) {
//     length++;
//   }
//   return length;
// }

// or

function stringLength(str) {
  let length = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}
console.log(stringLength("ram ajne"));
