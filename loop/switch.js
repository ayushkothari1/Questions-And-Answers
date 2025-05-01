switch (expression) {
  case value1:
    // block of code if expression === value1
    break;
  case value2:
    // block of code if expression === value2
    break;
  default:
  // block of code if expression doesn't match any case
}

// value of X
let x = 10;
switch (true) {
  case x < 5:
    console.log("x is less than 5");
    break;
  case x >= 5 && x < 15:
    console.log("x is between 5 and 15");
    break;
  default:
    console.log("x is greater than or equal to 15");
}

//   which fruit

let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "orange":
    console.log("This is an orange");
    break;
  default:
    console.log("Unknown fruit");
}

// which Color
let color = "red";
switch (color) {
  case "blue":
    console.log("It's blue");
    break;
  case "red":
    console.log("It's red");
    break;
  default:
    console.log("Unknown color");
}
