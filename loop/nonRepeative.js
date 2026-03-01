function firstNonRepeat(str) {
  let lower = str.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return lower[i];
    }
  }
  return undefined;
}

console.log(firstNonRepeat("aabbccddeffg")); // g
