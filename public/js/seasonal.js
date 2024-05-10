const button = document.getElementById("addUser");
const form = document.getElementById("form");
const exit = document.querySelector(".exitOut");
const register = document.getElementById("addScore");
const scores = document.getElementById("scores");
const exitTwo = document.getElementById("option2");

const holes = document.querySelectorAll(".hole");

button.addEventListener("click", () => {
  form.classList.remove("display-none");
  form.classList.add("display-flex");
});

exit.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("display-flex");
  form.classList.add("display-none");
});

register.addEventListener("click", (e) => {
  e.preventDefault();
  scores.classList.remove("display-none");
  scores.classList.add("display-flex");
});

exitTwo.addEventListener("click", (e) => {
  e.preventDefault();
  scores.classList.remove("display-flex");
  scores.classList.add("display-none");
});

document.addEventListener("DOMContentLoaded", function () {
  const holes = document.querySelectorAll(".hole");
  holes.forEach((hole) => {
    const value = parseInt(hole.textContent);
    if (!isNaN(value) && value < 6) {
      hole.style.color = "#008000";
    } else if (!isNaN(value) && value > 5 && value < 8) {
      hole.style.color = "#000033";
    } else if (!isNaN(value) && value > 7) {
      hole.style.color = "#DC143C";
    }
  });
});
