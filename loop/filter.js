// How would you filter out even numbers from [1, 2, 3, 4, 5]?

let arr = [1, 2, 3, 4, 5];
let result = arr.filter((num) => num % 2 !== 0);
console.log(result);

let arr2 = [1, 2, 3, 4, 5];
let result2 = arr2.filter((num) => num > 2);
console.log(result2);

let filterN = [{ a: 1, b: 5 }, { a: 4, b: 0 }, 4, 5];
let original = filterN.filter((n) => n.a > 1);
original[0].a = 3;
console.log(filterN);
