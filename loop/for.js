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

// Print numbers from 1 to 10 using a loop.

for (let x = 1; x < 11; x++) {
  console.log(x);
}

// Print all even numbers between 1 and 20.

for (let index = 2; index <= 20; index += 2) {
  console.log(index);
}

let nations = {
  GreatPowers: {
    superPoer: "america",
    lesserBuStillSuperPower: "China",
  },
  SupriorPower: "India",
  reginalPower: ["Japan", "Iran", "UK"],
};
for (const element in nations) {
  const key = nations[element];
  if (typeof key === "object" && !Array.isArray(key)) {
    console.log(element + " : ");
    for (const passkey in key) {
      console.log("  " + passkey + " : " + key[passkey]);
    }
  } else {
    console.log(element + " : " + key);
  }
}

const objects = {
  sena: "bahubali",
  king: "bhallaldeva",
  slave: "kattapa",
  queenMother: "shivganmi",
};
for (const key in objects) {
  const element = objects[key];
  console.log(key + " --  " + element);

  // console.log(element);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5];

for (const [index, num] of numbers.entries()) {
  console.log("Index of " + num + " is " + index);
}

const str = "freeCodeCamp";

// for (let char of str) {
//   console.log(char);
// }
let i = "freecodecamp";

// for (i = "f"; i < "p"; i++) {
//   console.log(i);
// }

for (const element of i) {
  console.log(element);
}

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

for (const [key, value] of Object.entries(people)) {
  console.log(`${value.name} is ${value.age} and the index is ${key}`);
}

const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

const person1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

for (const prop in person1) {
  // console.log(prop + " : " + person1[prop]);
  const element = person1[prop];
  if (typeof element === "object" && !Array.isArray(element)) {
    console.log(prop + " - ");
    for (const passkey in element) {
      console.log(" " + passkey + " : " + element[passkey]);
    }
  } else {
    console.log(prop + " : " + element);
  }
}

const person2 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

for (const prop in person2) {
  if (isObject(person2[prop])) {
    for (const nestedProp in person2[prop]) {
      console.log(person2[prop][nestedProp]);
    }
  } else {
    console.log(person2[prop]);
  }
}
