// Build the Largest Number Finder
//  you will build a function that returns an array consisting of the largest number from each provided sub-array.

let ram = [2, 5, 10];
let shyam = [12, 15, 10];
let gna = [13, 5, 10];
let comb = [ram, shyam, gna];
let combined = [ram[2], shyam[1], gna[0]];
// console.log(combined);

function largestOfAll(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let combineArray = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > combineArray) {
        combineArray = arr[i][j];
      }
    }
    result.push(combineArray);
  }
  return result;
}

console.log(
  largestOfAll([
    [3, 5, 2],
    [3, 3, 4],
    [4, 3, 2],
  ]),
);
