function isLeapYear(number) {
  if (number % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else if (number % 100 === 0) {
    console.log(`${year} is not a leap year.`);
  } else if (number % 4 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
let year = 4200;

isLeapYear(year);
