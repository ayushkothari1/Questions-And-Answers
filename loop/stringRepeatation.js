function repeatStringNumTimes(str, num) {
  let result = "";
  if (num <= 0) {
    return "";
  }
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("Ram", 3));

console.log(againRepeatation("Ram", 3));
function againRepeatation(str, numb) {
  if (numb <= 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < numb; i++) {
    result += str;
  }
  return result;
}
console.log(againRepeatation("Ram", 3));
