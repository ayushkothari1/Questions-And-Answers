const time = document.querySelector("#time");
const second = document.querySelector("#second");
const start = document.querySelector("#start");
const close = document.querySelector("#stop");
const minute = document.querySelector("#minute");
let val = "ayush";
let count = 0;
let countB = 0;
let timer = null;

start.addEventListener("click", function () {
  timer = setInterval(function () {
    count++;
    start.style.display = "none";
    close.style.display = "block";
    if (count == 60) {
      count = 0;
      countB++;
    }
    let c = count < 10 ? "0" + count : count;
    let c2 = countB < 10 ? "0" + countB : countB;

    minute.innerHTML = c;
    second.innerHTML = c2;
  }, 100);
});

close.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
    minute.innerHTML = "00";
    second.innerHTML = "00";
  }
  close.style.display = "none";
  start.style.display = "block";
  clearInterval(timer);
  count = "0";
  countB = "0";
});
