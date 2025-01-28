let string1 = "hello";
let string2 = "world";

let result = string1.concat(" ", string2)
console.log(result);

let string3 = "I";
let result2 = string3.concat(" ", "love", " ", "you");
console.log(result2);



// padStart(targetLength, padString):
let num = "5";
console.log(num.padStart(3, "0"));

console.log(num.padStart(3, "7" + "0"));
