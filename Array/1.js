// push(element1, ..., elementN):

// What does arr.push(4) do to the array arr = [1, 2, 3]?

const arr = [1, 2, 3];
// console.log(arr);
const result = arr.push(4);
console.log(arr);
console.log(result);

const result2 = arr.push(5, 6);
// console.log(arr);
// console.log(result2);



// pop();

const arr2 = [1, 2, 3];
console.log(arr2.pop());
console.log(arr2);



// unshift(element1, ..., elementN):

// How does arr.unshift(0) affect arr = [1, 2, 3]?

const ar = [1, 2, 4];

const unshift1 = ar.unshift(0);
console.log(unshift1);
console.log(ar);


const arr3 = [1, 2, 3];
const result3 = arr3.unshift(-1, 0);
console.log(result3);
console.log(arr3);






// shift()

// If arr = [1, 2, 3], what does arr.shift() return?

const arr4 = [1, 2, 3];
const result4 = arr4.shift();

console.log(arr4);
console.log(result4);

// shift() takes first index of array from array;