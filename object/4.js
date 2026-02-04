function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

// JSON stand of javascript object notation, its text based data format which is commanly used in exvhange data between server to web application
