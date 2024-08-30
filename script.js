let computerizedNumber = Math.round(Math.random() * 100);
const input = document.querySelector(".input");
const submitButton = document.querySelector(".Submit-button");
const guessComment = document.querySelector(".guess-comments");
const guessDisplay = document.querySelector(".guess-display");
const startGameButton = document.querySelector(".start-game-button");
const form = document.querySelector("form");
const guessesArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (parseInt(input.value) > computerizedNumber) {
    guessComment.innerText = "Too High";
  } else if (parseInt(input.value) < computerizedNumber) {
    guessComment.innerText = "Too low!";
  } else {
    guessComment.innerText = "Congrats! You guess the number";
    startGameButton.disabled = false;
    submitButton.disabled = true;
  }
  guessesArray.push(input.value);
  guessDisplay.innerText = "Your guess:" + guessesArray;
  form.reset();
});

startGameButton.addEventListener("click", () => {
  startGameButton.disabled = true;
  submitButton.disabled = false;
  guessComment.innerText = " ";
  guessDisplay.innerText = " ";
  computerizedNumber = Math.round(Math.random() * 100);
});
