function mutation(arr) {
  const [arr1, arr2] = arr;
  console.log(arr1);
  console.log(arr2);
  const lowerArr1 = arr1.toLowerCase();
  const lowerArr2 = arr2.toLowerCase();
  console.log(lowerArr1);
  console.log(lowerArr2);
  for (const element of lowerArr2) {
    if (!lowerArr1.includes(element)) {
      return false;
    }
  }
  return true;
}

const hey = mutation(["hel", "He"]);
console.log(hey);

function mutationEl(arr) {
  const [first, second] = arr;
  const firstArr = first.toLowerCase();
  const secondArr = second.toLowerCase();
  for (const char of secondArr) {
    if (!firstArr.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(mutationEl(["ram", "MAR"]));
