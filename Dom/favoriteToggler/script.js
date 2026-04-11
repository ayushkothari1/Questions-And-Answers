const FavoriteIcon = document.querySelectorAll(".favorite-icon");

FavoriteIcon.forEach(function (e) {
  e.addEventListener("click", function () {
    e.classList.toggle("filled");
    if (e.classList.contains("filled")) {
      e.innerHTML = "&#10084;";
    } else {
      e.innerHTML = "&#9825;";
    }
  });
});
