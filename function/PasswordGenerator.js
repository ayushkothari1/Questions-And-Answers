// Password Generator App
//  using functions by building a random password generator.

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generatePassword(l) {
  let result = "";

  while (l > result.length) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
}

let password = generatePassword(12);
console.log(`Generated password: ${password}`);

let numbers = "1234567890";
function generatePin(numb) {
  let result = "";
  while (numb > result.length) {
    result += numbers[Math.floor(Math.random() * numbers.length)];
  }
  return result;
}

let pin = generatePin(9);
console.log(`Generate pin : ${pin}`);
