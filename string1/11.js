// split(separator, limit):

// What will "apple,banana,orange".split(",") return?

// console.log("apple,banana,orange".split(","));


// How can you split "apple,banana,orange" into just two elements using split()?
console.log("apple,banana,orange".split(",", 2));
let fruits = "apple,banana,orange";
let result = fruits.split(",", 2);
console.log(result);  // Output: ["apple", "banana,orange"]