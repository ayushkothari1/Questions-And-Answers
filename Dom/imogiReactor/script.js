// const happyBtn = document.querySelector("#happy-btn");

function updateCount(button) {
  const countEl = button.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount >= 10) return;

  currCount++;

  countEl.textContent = `${currCount}/10`;
}
const btns = document.querySelectorAll(".emoji-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    updateCount(btn);
  });
});

// const happyBtn = document.querySelector("#happy-btn");
// const confusedBtn = document.querySelector("#confused-btn");
// const sadBtn = document.querySelector("#sad-btn");
// const lovingBtn = document.querySelector("#loving-btn");
// happyBtn.addEventListener("click", () => {
//   updateCount(happyBtn);
// });
// confusedBtn.addEventListener("click", () => updateCount(confusedBtn));

// sadBtn.addEventListener("click", () => updateCount(sadBtn));
// lovingBtn.addEventListener("click", () => updateCount(lovingBtn));

// or

// happyBtn.addEventListener("click", () => {
//   const countEl = happyBtn.querySelector(".count");
//   //   console.log(countEl.textContent);
//   const text = countEl.textContent;
//   let currCount = Number(text.split("/")[0]);
//   //   or
//   // let currCount = parseInt(countEl.textContent, 10) || 0;

//   //   console.log("Current count:", currCount);
//   if (currCount < 10) {
//     currCount += 1;
//     countEl.textContent = `${currCount}/10`;
//   }
//   console.log(currCount);
// });
