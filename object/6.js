const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere",
    },
  },
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number); // undefined

let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge, city: newWork } = person;

console.log(personName); // Alice
console.log(personAge); //  30
console.log(newWork);

function createPerson(name, age) {
  return { name, age };
}

let person1 = createPerson("Charlie", 35);
console.log(person1); // { name: "Charlie", age: 35 }

function alokechalu(city, state) {
  return { city, state };
}
console.log(alokechalu("dehradun", "uttarkhand"));
