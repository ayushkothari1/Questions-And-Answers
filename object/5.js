// JSON
// JSON stand of javascript object notation, its text based data format which is commanly used in exvhange data between server to web application
const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(typeof jsonString);

const obj = JSON.parse(jsonString);
console.log(obj);
console.log(typeof obj);

const user1 = {
  name: "John",
  address: {
    city: "NY",
    zip: 12345,
  },
};

const obj1 = JSON.stringify(user1, ["name", "address"]);
console.log(obj1);
