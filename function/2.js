function greet(nameE) {
  return `name is ${nameE}!`;
}

// greet("rams");
// greet("ravan");
// greet("lakshman");

function ektara() {
  console.log(
    `I actually would like to thank you guys that you love me even though my ${greet(
      "ram"
    )}`
  );
}
ektara();

function doSomething() {
  return "hi hi and hi";
}

let thisIsIt = doSomething();
console.log(thisIsIt);

function inToNum(a, b) {
  return a * b;
}
console.log("ANSWER IS:" + inToNum(19, 9));
