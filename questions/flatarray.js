// 3. Deep Flatten Array
// Input: [1, [2, [3, [4, [5]]]]]

const arr = [1, [2, [3, [4, [5]]]]];

// console.log(arr.flat(Infinity));
function flatten(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flatten(arr));
