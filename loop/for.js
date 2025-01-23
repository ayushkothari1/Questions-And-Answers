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
  // console.log(index);
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
    //  console.log(i + ' * ' + j + ' = ' + (i * j));
  }
}

// Question: Write a program that iterates through an array of numbers [1, 2, 3, 4, 5] and prints each value.

let array = [1, 2, 3, 4, 5];

array.forEach(function (e) {
  console.log(e);
});
