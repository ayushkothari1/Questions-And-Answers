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

console.log(countVowels("ram duhai sree ram duahi mere ram  sree ram"));

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
console.log(top("zzzzzzzzzzz ayush mera naame liya mujhe yaad kiya ha ha ha "));
