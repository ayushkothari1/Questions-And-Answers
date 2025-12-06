function emailFunc(email) {
  const thatIndex = email.indexOf("@");
  const userName = email.slice(0, thatIndex);
  const restIndex = email.slice(thatIndex + 1);
  console.log(restIndex);

  const firstChar = userName[0];
  const lastChar = userName[userName.length - 1];
  console.log(lastChar);
  const specialChar = userName.slice(1, userName.length - 1);
  console.log(specialChar);

  const middleMan = "*".repeat(specialChar.length);
  console.log(middleMan);

  return firstChar + middleMan + lastChar + "@" + restIndex;
}
console.log(emailFunc("ayushkothari@gmail.com"));
