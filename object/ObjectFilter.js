// Implement a Matching Object Filter
//  a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source
//  object.

function whatIsInAName(collection, source) {
  const sourceKey = Object.keys(source);
  console.log(sourceKey);
  return collection.filter((obj) =>
    sourceKey.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key],
    ),
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);
