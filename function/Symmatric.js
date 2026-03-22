// Build a Symmetric Difference Function
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

console.log(diffArray([3, 4, 3, 5], [1, 4, 2, 4]));
console.log(diffArray([3, 6, 3, 5], [10, 3, 2, 4]));
console.log(diffArray([3, 6, 13, 5], [10, 3, 2, 4]));
console.log(diffArray([7, 6, 3, 5], [10, 13, 12, 4]));

//
// 2
// Implement a Value Remover Function
// In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

function destroyer(arr, ...x) {
  return arr.filter((y) => !x.includes(y));
}

console.log(destroyer([3, 4, 3, 5, 2, 5, 5, 6, 7], 2, 4, 5, 2, 6));
