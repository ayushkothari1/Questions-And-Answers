let num = 10;
function factorialCalculator(numb) {
  let result = 1;
  for (let i = 1; i <= numb; i++) {
    result *= i;
  }
  return result;
}
const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

let count = 20;
function factorialCount(count) {
  let result = 1;
  for (let i = 1; i <= count; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialCount(count));
