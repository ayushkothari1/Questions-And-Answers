const obj = {
  name: "ramehs",
  fee: "200",
  studnt: 300,
};

console.log(obj["fee"]);
delete obj["fee"];

console.log(obj["fee"]);

const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
};
console.log(person.hasOwnProperty("ragh"));
console.log("name" in person);
console.log(person["rage"] !== undefined);

const { city, job, ...remainingObj } = person;

console.log(remainingObj);
console.log(city);
