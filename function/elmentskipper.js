// Implement an Element Skipper
//  function that skips elements in an array until it finds an acceptable one based on a specific test function.

function dropElements(arr, func) {
  let index = 0;
  while (index <= arr.length && !func(arr[index])) {
    index++;
  }
  return arr.slice(index);
}

console.log(dropElements([3, 4, 5, 6], (n) => n > 4));

console.log(dropElements([3, 4, 5, 16], (n) => n >= 4));
console.log(dropElements([3, 4, 5, 6], (n) => n > 4));
