const Marpara = [2, 4, 5, 6].map((element) => {
  console.log("Element :" + element);

  return element;
});

const Marpara2 = [1, 2, 4, 5, 10].map((element, index) => {
  console.log("Element: " + element);
  console.log("index: " + index);
  return element * 2;
});

const Marpara3 = [1, 2, 4, 5, 10].map((element, index, array) => {
  console.log("Element: " + element);
  console.log("index: " + index);
  console.log("Array: " + array);

  return element * 2;
});

console.log(Marpara, Marpara2, Marpara3);
