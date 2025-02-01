const hehe = document.querySelector("#hehe");
const huhu = document.querySelector("#huhu");
const start = document.querySelector("#start");
const close = document.querySelector("#stop");
const hn = document.querySelector("#hn");
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

    hn.innerHTML = c;
    huhu.innerHTML = c2;
  }, 100);
});

close.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
    hn.innerHTML = "00";
    huhu.innerHTML = "00";
  }
  close.style.display = "none";
  start.style.display = "block";
  clearInterval(timer);
  count = "0";
  countB = "0";
});
