// match(regex):

// How can you check if "hello" contains an "e" using match()?
const str = "hello";
const result = str.match(/e/);
console.log(result);
console.log(result != null);


// What does "hello world".match(/\w+/) return?

console.log("ram world".match(/\w+/));



// matchAll(regex):

// What will "abracadabra".matchAll(/a/g) return?

console.log("abracadabra".matchAll(/a/g));
for (const match of "abracadabra".matchAll(/a/g)) {
    console.log(match);
  }
  
  


//   search(regex):

// What does "hello world".search(/world/) return?

console.log("ram jayanti".search(/jayanti/));
console.log("ram".search(/b/));
