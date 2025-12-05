let chhaya = function (x, y) {
  return x - y;
};

function maya(a, b) {
  return a + b;
}
console.log(`${chhaya(5, 1)} is bigger Or ${maya(2, 2)} who knows!`);

function myName(name = "ayush") {
  console.log("my name is " + name);
  //   return name;
}

myName("mahaveer");

function callB(a, b = 4) {
  return a - b;
}

console.log(callB(10, 9));
console.log(callB(10));
