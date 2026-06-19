// 5. Longest Consecutive Sequence
// Input:
// [100, 4, 200, 1, 3, 2]
// Output:
// 4
// Because:
// 1,2,3,4
// has length 4.
// Challenge:

// Solve in O(n), not O(n log n)

// Tests:

// Sets
// Optimization

function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;
      while (set.has(num + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
