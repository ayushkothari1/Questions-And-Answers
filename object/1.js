const person = {
  name: "ram",
  age: 20,
  place: "ramnagar",
  ishuman: true,
};
let raghav = person["name"];
console.log(raghav);
raghav = "sanjiv";
console.log(raghav);

console.log(person.name);
console.log(person.age);
console.log(person.place);
console.log(person.ishuman);
person["ishuman"] = false;
console.log(person["ishuman"]);

if (!person.ishuman) {
  console.log("rakshasham jagriti");
} else {
  console.log("rakshasham srijayam");
}
