// Write a function counter that returns an object with two methods: increment() and decrement(). The counter should maintain its value privately and not expose it directly.

function IncrDecre() {
  let result = 0;
  return {
    increment: function () {
      result += 1;
      return result;
    },
    decrement: function () {
      result -= 1;
      return result;
    },
  };
}

const IncrementDecrement = IncrDecre();

console.log(IncrementDecrement.decrement());
console.log(IncrementDecrement.increment());
console.log(IncrementDecrement.increment());
console.log(IncrementDecrement.increment());
console.log(IncrementDecrement.decrement());
