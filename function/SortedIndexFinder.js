// Imment a Sorted Index Finder

//  you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.ple

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex((a) => num <= a);

  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([3, 5, 6, 10], 50));
console.log(getIndexToIns([3, 5, 6, 10], 0));
console.log(getIndexToIns([3, 5, 6, 10], NaN));
console.log(getIndexToIns([3, 5, 6, 10], 5));
