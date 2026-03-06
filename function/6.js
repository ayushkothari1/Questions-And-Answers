function createLargeArray() {
  let largeArray = new Array(1000000);
  return function () {
    console.log(largeArray.length);
  };
}

let printArrayLength = createLargeArray();
printArrayLength();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
