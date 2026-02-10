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

const person2 = {
  name: "Bob",
  age: 30,
  sayHello: function () {
    return "Hello, my name is " + this.name;
  },
};

console.log(person2.sayHello());

function Perso(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Perso("Alice", 25);
console.log(p1.name); // "Alice"
console.log(p1.age); // "Alice"

function rakehs(ek, two) {
  this.ek = ek;
  this.two = two;
}
const c = new rakehs(3, 4);
console.log(c.ek);
console.log(c.two);
