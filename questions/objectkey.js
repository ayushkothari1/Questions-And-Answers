// Implement a function that groups an array of objects by a given key.

// groupBy(users, "age")

let obj = [
  {
    name: "ram",
    kaam: 14,
  },
  {
    name: "shyam",
    kaam: 14,
  },
  {
    name: "hanuman",
    kaam: 13,
  },
];

function testGrouping(obj, key) {
  return obj.reduce((ActiveObject, currentValue) => {
    let keyValue = currentValue[key];
    if (!ActiveObject[keyValue]) {
      ActiveObject[keyValue] = [];
    }
    ActiveObject[keyValue].push(currentValue);
    return ActiveObject;
  }, {});
}

console.log(testGrouping(obj, "kaam"));

let obj2 = [
  {
    name: "ram",
    age: 20,
    grade: 11,
  },
  {
    name: "ram",
    age: 14,
    grade: 10,
  },
  {
    name: "hanuman",
    age: 20,
    grade: 10,
  },
];

function findCommonility(obj, key) {
  return obj.reduce((StorValue, currentValue) => {
    let keyvalue = currentValue[key];
    if (!StorValue[keyvalue]) {
      StorValue[keyvalue] = [];
    }
    StorValue[keyvalue].push(currentValue);
    return StorValue;
  }, {});
}

console.log(findCommonility(obj2, "grade"));
console.log(findCommonility(obj2, "name"));
console.log(findCommonility(obj2, "age"));
