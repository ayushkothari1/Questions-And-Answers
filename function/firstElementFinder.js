// Build a First Element Finder
// you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").
//

function funca(arr) {
  //   let arr = [3, 5, 8];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      return arr[i];
    }
  }
}
// arr = [2, 3, 5];
console.log(funca([2, 3, 5]));

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
function func(num) {
  return num % 2 === 0;
}
const result = findElement([1, 4, 5, 2], func);

console.log(result);
