// Build an All-True Property Validator
//  test a specific property of each object in an array to see if it always has a truthy value or not.
// you could be asked to test one property of the objects in an array like the following:

function truthCheck(collection, pre) {
  return collection.every((e) => e[pre]);
}

const something = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot",
);

console.log(something);
