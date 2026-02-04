const nameEl = "inub ik ahdar";
const spl = nameEl.split("");
console.log(spl);
const rever = spl.reverse();
const joi = rever.join("");
console.log(nameEl);
console.log(rever);
console.log(joi);

const arr2 = [2, "ram", 5, "seeta"];
console.log(arr2.indexOf("ram"));

console.log(arr2.splice(1, 3));
console.log(arr2);

let colors = ["red", "green", "blue", "voilet"];
colors.splice(0, 0, "yellow", "purple");

console.log(colors);

const result2 = colors.slice(1, 2);
console.log(result2);
