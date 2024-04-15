const button = document.getElementById("addUser");
const form = document.getElementById("form");
const exit = document.querySelector(".exitOut");
const register = document.getElementById("addScore");
const scores = document.getElementById("scores");
const exitTwo = document.getElementById("option2");

button.addEventListener("click", () => {
  form.classList.remove("display-none");
  form.classList.add("display-flex");
  console.log("hi");
});

exit.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("display-flex");
  form.classList.add("display-none");
  console.log("hi");
});

register.addEventListener("click", () => {
  scores.classList.remove("display-none");
  scores.classList.add("display-flex");
  console.log("hi");
});

exitTwo.addEventListener("click", (e) => {
  e.preventDefault();
  scores.classList.remove("display-flex");
  scores.classList.add("display-none");
  console.log("hi");
});
