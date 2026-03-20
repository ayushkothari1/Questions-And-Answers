// Dice Roller Simulator Objective: Simulate rolling dice with a function.

function diceSim(side) {
  return Math.floor(Math.random() * side) + 1;
}

let dice1 = diceSim(6);
let dice2 = diceSim(6);

let sum = dice1 + dice2;

console.log(`one is ${dice1} and other is ${dice2} and their sum is ${sum}`);

function diceSum(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let diceSum1 = diceSum(10);
let diceSum2 = diceSum(12);

let sumDice = diceSum1 + diceSum2;

console.log(
  `one is ${diceSum1} and other is ${diceSum2} and their sum is ${sumDice}`,
);
