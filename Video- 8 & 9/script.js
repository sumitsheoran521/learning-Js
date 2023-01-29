"use strict";

let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".guess").value = "";
  if (!guess) {
    displayMessage("No number entered ⛔");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#29a005";
    number.style.width = "50rem";
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📈 Too low")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😑 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
let again = document.querySelector(".again");
again.addEventListener("click", () => {
  score = 5;
  document.querySelector("body").style.backgroundColor = "#222222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  number.style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  guess.value = "";
});
