function fearNotLetter(string) {
  let str = string.toLowerCase();
  for (let i = 0; i < str.length - 1; i++) {
    let currentCharCode = str.charCodeAt(i);
    let nextCharCode = str.charCodeAt(i + 1);
    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("ABCDefghijlmnopqrstuvwxy"));

function letDetect(sting) {
  for (let i = 0; i < sting.length - 1; i++) {
    let currentLetter = sting.charCodeAt(i);
    let nextLetter = sting.charCodeAt(i + 1);
    if (nextLetter - currentLetter > 1) {
      return String.fromCharCode(currentLetter + 1);
    }
  }
  return undefined;
}
console.log(letDetect("abcdefghijlmnopqrstuvwxy"));
