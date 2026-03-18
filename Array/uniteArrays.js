// Implement a Unique Sorted Union

function uniteUnique(...arrays) {
  let result = [];
  arrays.forEach((array) => {
    array.forEach((e) => {
      if (!result.includes(e)) {
        result.push(e);
      }
    });
  });
  return result;
}
