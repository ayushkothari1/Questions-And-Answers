// UpperCase
// What will "hello".toUpperCase() output?

// console.log("hello".toUpperCase());
// console.log("Ramav Raghvam".toUpperCase());
// console.log("ritihara".toUpperCase());
// console.log("javascript".toUpperCase());




// toLowerCase
// Does "abc".toLowerCase() return a new string or modify the original?

console.log("abc".toLowerCase());





// localeCompare(compareString):
// What does "apple".localeCompare("banana") return?

console.log("apple".localeCompare("banana"));
console.log("aeage".localeCompare("aeagaa"));
console.log("cat".localeCompare("dog"));





// valueOf():

// What does "hello".valueOf() return?
console.log("hello".valueOf());

// Both .valueOf() and .toString() return the same value for strings ("hello"), but:

// .valueOf() is meant to return the primitive value (which for strings is the string itself).
// .toString() returns a string representation of the object, and for a string, it just returns the string itself as well.
// Thus, for primitive types like strings, they behave the same.




// toString
// How can you convert the number 123 to a string?

const num = 123;
console.log(num.toString());
console.log(typeof(num.toString()));

// alling toString() does not alter the original string.

// In JavaScript, strings are immutable, which means they cannot be changed once they are created. The toString() method just returns a new string (or the same string if it's already a string) and doesn't modify the original string.