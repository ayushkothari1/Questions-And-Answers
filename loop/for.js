// Question: Write a program that prints the numbers from 1 to 10 using a for loop.

for (let score = 1; score <= 10; score++) {
  //   console.log(score);
}

// Question: Write a program that prints all even numbers between 1 and 20 using a for loop.

for (let index = 1; index <= 10; index++) {
  let even = index * 2;
  // console.log(even);
}
// OOrr
for (let index = 2; index <= 20; index += 2) {
  console.log(index);
}

// // Question: Write a program that prints the numbers from 1 to 10, but stops when it reaches 6 (use break).

for (let num = 1; num <= 10; num++) {
  if (num === 6) {
    break;
  }
  // console.log(num);
}

// Question: Write a program that prints all numbers from 1 to 10 except the number 5 (use continue).

for (let element = 1; element < 10; element++) {
  if (element === 6) {
    continue;
  }
  //   console.log(element);
}

// Question: Write a program that uses a nested for loop to print a multiplication table for numbers 1 through 3.

for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

// Question: Write a program that iterates over the properties of the object {name: "John", age: 30, city: "New York"} using a for...in loop and prints each key and value.

let person = { name: "John", age: 30, city: "New York" };

for (const key in person) {
  console.log(key + ": " + person[key]);
}

//   Question: Write a program that iterates through an array of numbers [10, 20, 30] using the for...of loop and prints each value.

let value = [10, 20, 30];

for (const element of value) {
  console.log(element);
}

for (let index = 10; index <= 11; index++) {
  for (let tool = 1; tool <= 10; tool++) {
    console.log(index + "*" + tool + "=" + index * tool);
  }
}
