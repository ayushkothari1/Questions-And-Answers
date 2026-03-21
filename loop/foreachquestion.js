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

const arr = [1, 2, 3];
arr.forEach((num) => {
  setTimeout(() => console.log(num), 1000);
});

const obj = {
  multiplier: 2,
  numbers: [1, 2, 3],
  multiply() {
    const self = this;
    self.numbers.forEach(function (n) {
      console.log(n * self.multiplier);
    });
  },
};

obj.multiply();

const obj2 = {
  kancha: 6,
  player: ["ramshes", "suresh", "dinesh"],
  theGame() {
    const self = this;
    self.player.forEach((e) => {
      console.log(`${e} have ${self.kancha} kancha`);
    });
  },
};

obj2.theGame();
