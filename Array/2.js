// splice(start, deleteCount, item1, ..., itemN):

// What will arr.splice(1, 1) do to arr = [1, 2, 3]?

const arr1 = [1, 2, 3];
const result1 = arr1.splice(1, 2);
console.log(arr1);
console.log(result1);


// How can you replace the second element in arr = [1, 2, 3] with 4 using splice()?

const arr2 = [1, 2, 3];
const result2 = arr2.splice(1, 1, 4)
console.log(arr2);
console.log(result2);
