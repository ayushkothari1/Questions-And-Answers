const sum = [1, 2, 3, 4, 10];
function sumArray(arr) {
  return arr.reduce((stored, current) => {
    return stored + current;
  }, 0);
}

console.log(sumArray(sum));
