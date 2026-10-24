function findLargest(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

console.log(findLargest([4, 9, 2, 15, 7]));
