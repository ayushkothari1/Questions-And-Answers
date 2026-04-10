const box = document.getElementById("box");
const classEl = document.getElementById("class");
const input = document.querySelector("input");
//   box.innerHTML = `    <p>Hello</p>
//   <p hidden>Hidden text</p>`;

const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

// Add event listener to button
btn.addEventListener("click", toggleBgColor);

// Remove button listener when paragraph is hovered
para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
  console.log("removed");
});

console.log(navigator.language);
console.log(navigator.userAgent);
console.log(window.innerWidth);
console.log(window.location);
console.log(document.children);
box.setAttribute("class", "box");
classEl.setAttribute("class", "classes");
if (navigator.language === "en-US") {
  box.innerText = "Hello!";
} else {
  box.innerText = "Hi!";
}
input.addEventListener("input", function (e) {
  console.log("hey");
});
