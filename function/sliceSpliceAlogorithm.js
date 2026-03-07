// Implement the Slice and Splice Algorithm
//  you will need to create an algorithm to merge two arrays.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

function frankenSplice(arr1, arr2, index) {
  const result = arr2.slice();
  result.splice(index, 0, ...arr1);
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 2));
//  [4, 1, 2, 3, 5].
