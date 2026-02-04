const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person.contact.phone.home);
console.log(person["contact"]["phone"]["home"]);

const num = "raghav";
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"

const newObj = new Object(undefined);
console.log(newObj); // {}
