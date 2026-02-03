const arr = [
  [2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9],
  [1, 2, 3, 5, 7],
  [4, 6, 8, 9, 10],
];

const result = arr[2][2];
console.log(result);

const arr1 = [2, 5, 9];
[rakesh, ramehsh, surendra] = arr1;

console.log(rakesh);
console.log(surendra);
console.log(ramehsh);
console.log(arr1);

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(rest); // ["orange", "mango", "kiwi"]
