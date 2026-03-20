// Build an Odd Fibonacci Sum Calculator

function Sumfib(num) {
  let a = 0,
    b = 1;
  let result = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      result += a;
    }
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(Sumfib(100));

function sumMore(num) {
  let a = 101,
    b = 200;
  let result = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      result += a;
    }
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(sumMore(1000));
