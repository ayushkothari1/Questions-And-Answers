function converterHTml(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  const result = str.replace(/[&<>"']/g, (match) => entities[match]);
  return result;
}

console.log(converterHTml("has;&M<>"));

function converterLetter(str) {
  const letter = {
    A: "K",
    R: "L",
    J: "O",
  };
  return str.replace(/[ARJ]/g, (match) => {
    return letter[match];
  });
}

console.log(converterLetter("Ram Nam Satya AAi"));
