const draft = document.getElementById("draft");
const clear = document.getElementById("clear");
const imageElements = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
  document.getElementById("10"),
  document.getElementById("11"),
  document.getElementById("12"),
];

const people = [
  "/img/jake.jpg",
  "/img/david.jpg",
  "/img/kev.jpg",
  "/img/alex.jpg",
  "/img/isaac.jpg",
  "/img/jared.jpg",
  "/img/ben.jpg",
  "/img/logan.jpg",
  "/img/matt.jpg",
  "/img/larry.jpg",
  "/img/everett.jpg",
  "/img/guy.jpg",
];

draft.addEventListener("click", () => {
  let newDraft = people.slice();

  // Function to update the image with a delay
  function updateImageWithDelay(index) {
    if (index >= 12) return; // Exit the loop when done
    let randomNumber = Math.floor(Math.random() * newDraft.length);
    imageElements[index].src = newDraft[randomNumber];
    newDraft.splice(randomNumber, 1);

    setTimeout(() => {
      updateImageWithDelay(index + 1); // Call the function recursively with the next index
    }, 2000); // Delay in milliseconds (1 second in this example)
  }

  updateImageWithDelay(0); // Start updating images with delay
});

clear.addEventListener("click", () => {
  for (let i = 0; i < 12; i++) {
    imageElements[i].src = "";
  }
});
