function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
  } else if (age >= 13 && age <= 17) {
    console.log("Teenager");
  } else if (age <= 12) {
    console.log("Child");
  }
}

checkAge(10); // should print "Child"
checkAge(15); // should print "Teenager"
checkAge(20); // should print "Adult"
