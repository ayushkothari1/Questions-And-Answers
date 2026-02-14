function findLongestWordLength(str) {
  const Words = str.split(" ");
  let maxLength = 0;
  for (const word of Words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("i can do anything possible HAha"));
