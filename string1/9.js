let string1 = "hello";
let string2 = "world";

let result = string1.concat(" ", string2)
// console.log(result);

let string3 = "I";
let result2 = string3.concat(" ", "love", " ", "you");
// console.log(result2);



// padStart(targetLength, padString):
let num = "5";
// console.log(num.padStart(3, "0"));

// console.log(num.padStart(3, "7" + "0"));


// How can you change "5" to "500" using padEnd()?
// console.log("5".padEnd(3, "0"));




// repeat
// What will the result be when calling "abc".repeat(3)?

console.log("abc".repeat(3))
// console.log("hi".repeat(5));




// replace(searchValue, newValue):
// How can you change "hello" to "jello" using replace()?

// console.log("hello".replace("h", "j"));


// How can you replace only the first occurrence of "l" in "hello" with "p" using replace()?

// console.log("hello".replace("l", "p"));



// replaceAll(searchValue, newValue):

console.log("hello".replaceAll("l", "p"));
console.log("apple".replaceAll("a", "o"));
