// should print 0, 1, 2

function createCounters() {
  let counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      console.log(i);

      //   return i;
    });
  }
  return counters;
}

const myCounters = createCounters();
console.log(myCounters[1]());
myCounters.forEach((fn) => fn());

// console.log(createCounters());
