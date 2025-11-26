const btn = document.querySelector(".promt-btn");
const output = document.querySelector(".output");

btn.addEventListener("click", function () {
  const userName = prompt("its not real problem", "Guest");
  output.textContent = "its ok " + userName + "!";
});
