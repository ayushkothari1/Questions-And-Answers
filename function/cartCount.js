let count = 0;
function cc(card) {
  //   if (card >= 2 && card <= 10) {
  //     return card;
  //   } else {
  //     return "not between 2 and 10";
  //   }

  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  }
  //  if (card >= 7 && card <= 9) {
  //   // count = count;
  // }
  else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count--;
  }

  return count + (count > 0 ? " Bet" : " Hold");
}

// // cc(7); // count = 0 → Hold
// // cc(8); // count = 0 → Hold
// console.log(cc(9)); // 0 Hold ✅

// console.log(cc("A"));
// cc(10); // count = -1
// cc("J"); // count = -2
// cc("Q"); // count = -3
// cc("K"); // count = -4
// console.log(cc("A")); // -5 Hold ✅
cc(3); // count = 1
cc(7); // count = 1
cc("Q"); // count = 0
cc(8); // count = 0
console.log(cc("A")); // -1 Hold ✅
