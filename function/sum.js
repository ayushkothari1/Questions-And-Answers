// You should have a function that will take a two numbers in
//  array and return the sum of all the numbers between them including themselves aswell.

function sumAll(array) {
  let n = array[0];
  let m = array[1];
  if (n > m) [n, m] = [m, n];
  let num = m - n + 1;
  let result = (num * (n + m)) / 2;
  return result;
}

console.log(sumAll([5, 4]));
