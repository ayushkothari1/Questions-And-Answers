let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

users.forEach(function (e) {
  console.log(`${e.name} is ${e.age} years old`);
});

console.log(users[0].name + " is " + users[0].age + " years old");

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// matrix.forEach((e) => {
//   e.forEach((j) => {
//     console.log(j);
//   });
// });

// or

matrix.flat().forEach((e) => {
  console.log(e);
});
