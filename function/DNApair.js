// function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.

function pairElement(str) {
  const DNApair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const result = [];
  for (let char of str) {
    result.push([char, DNApair[char]]);
  }
  return result;
}

console.log(pairElement("RAM"));
