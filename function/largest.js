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

function secondLargest(numbers) {
  let largest = -Infinity;
  let second = -Infinity;
  for (const n of numbers) {
    if (n > largest) {
      second = largest;
      largest = n;
    } else if (n > second && n !== largest) {
      second = n;
    }
  }
  return second;
}

console.log(secondLargest([4, 9, 2, 15, 7]));
