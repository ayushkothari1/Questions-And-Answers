// 4. Deep Equality
// Input:
// deepEqual(

function deepEquality(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }
  const obj1El = Object.keys(obj1);
  const obj2El = Object.keys(obj2);
  if (obj1El.length !== obj2El.length) {
    return false;
  }
  for (const element of obj1El) {
    if (!obj2El.includes(element)) {
      return false;
    }
    if (!deepEquality(obj1[element], obj2[element])) {
      return false;
    }
  }
  return true;
}

console.log(deepEquality({ a: 1 }, { a: 1 }));
