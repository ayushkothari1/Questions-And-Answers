// filter(callback):

// How would you filter out even numbers from [1, 2, 3, 4, 5]?

const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);