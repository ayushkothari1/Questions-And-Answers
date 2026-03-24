// Implement a Range-Based LCM Calculator
//  create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.
// ----

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  function abc(a, b) {
    return b === 0 ? a : abc(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / abc(a, b);
  }
  return range.reduce((ear, curr) => lcm(ear, curr));
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));

//

// 2

function rangeBaseCalculator(arr) {
  arr.sort((a, b) => a - b);
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  function abc(a, b) {
    return b === 0 ? a : abc(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / abc(a, b);
  }
  return range.reduce((per, curr) => lcm(per, curr));
}

console.log(rangeBaseCalculator([1, 5]));
console.log(rangeBaseCalculator([5, 1]));
