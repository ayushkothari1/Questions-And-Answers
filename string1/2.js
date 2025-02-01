// Question - Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
  const vowels = "aeouiAEOUI";
  let count = 0;
  for (const element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("ram duhai sree ram duahi mere ram  sree ram"));

function top(naam) {
  const me = "AaYyUuSsHhKkOoTtRrIi";
  let count = 100;
  for (const element of naam) {
    if (me.includes(element)) {
      count++;
    }
  }
  return count;
}
// console.log(top("zzzzzzzzzzz ayush mera naame liya mujhe yaad kiya ha ha ha "));

function countvowels(str) {
  const vowels = "auoeiAUOEI";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("my why cry shy try aaaaaioueeis"));

function countAlphabets(str) {
  const vowels2 = "aeouiAEOUI";
  const Consonants = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ";
  const total = "aeouiAEOUIbBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ";
  let countVowels = 0;
  let countConsonants = 0;
  let countAlphabets = 0;
  for (const element of str) {
    if (vowels2.includes(element)) {
      countVowels++;
    }
    if (Consonants.includes(element)) {
      countConsonants++;
    }
    if (total.includes(element)) {
      countAlphabets++;
    }
  }
  return { countAlphabets, countConsonants, countVowels };
}
console.log(
  countAlphabets(
    "ram me agar shakti hai to kyu nhi aate idhar mere man ke dwar khole hai maine idhar ha ha"
  )
);
