function SmallFuncton(numbers) {
  return numbers.reduce((a, b) => (a > b ? b : a), numbers[0]);
}

console.log(SmallFuncton([2, 1, 5, 2, 5]));
