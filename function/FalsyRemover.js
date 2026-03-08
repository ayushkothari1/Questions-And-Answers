// Implement a Falsy Remover

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}

function bouncer2(arr) {
  return arr.filter((element) => {
    return Boolean(element);
  });
}

console.log(bouncer(["ram", 0, 1, false, 14, NaN]));
console.log(bouncer2(["ram", 0, 1, false, 14, NaN]));
