// Create a Deep Flattening Tool
//  you will be implementing an array flattening algorithm.

// Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.

function steamrollArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(steamrollArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}

console.log(steamrollArray([[[3]]]));
