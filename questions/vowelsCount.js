// Count vowels in a string

// Example:

// "hello world" → 3

function vowelsCount(sent) {
  let vowel = "aeiou";
  let sentence = sent.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowel.includes(sentence[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(vowelsCount("rama hamre jeevan me"));
