function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}
function double(x) {
  return x * 2;
}
let numbers = [1, 2, 3];
console.log(operateOnArray(numbers, double));

function TruthOrnot(num) {
  if (num % 2 === 0) {
    return function truth() {
      return true;
    };
  }
}

const truth = TruthOrnot(4);
console.log(truth());
