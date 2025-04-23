const bullet = document.querySelector(".bullet");
const hit = document.querySelector(".hit");
const person = document.querySelector(".person");
const score = document.querySelector(".score");
let num = 0;

hit.addEventListener("click", function () {
  bullet.style.display = "block";
  bullet.classList.add("bullet2");
  person.classList.add("person2");
  hit.style.visibility = "hidden";
  num++;
  score.innerHTML = `Score is <span>${num}</span>`;
  setTimeout(function () {
    bullet.style.display = "none";
    score.style.display = "block";
  }, 5000);
});
