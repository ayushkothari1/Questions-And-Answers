// map(callback):

// How would you use map() to multiply all elements in [1, 2, 3] by 2?

const arr = [1, 2, 3];
const result = arr.map( ha => ha*2);
console.log(result);
// const numbers = [10, 20, 30, 40, 50];

// const indexedNumbers = numbers.map((num, index) => {
//   return `${index}: ${num}`;
// });

// console.log(indexedNumbers);  // ["0: 10", "1: 20", "2: 30", "3: 40", "4: 50"]

// What will [10, 2.2, 3.3].map(x => x * 2) return?

const arr2 = [10, 2.2, 3.3];
const result2 = arr2.map(x => x*2);
console.log(result2);
