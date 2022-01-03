"use strict";

let secrateNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secrateNumber;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //    when there is no Input
  if (!guess) {
    document.querySelector(".message").textContent = " Please Enter Number ";
  }

  // When Player wins the Game
  else if (guess === secrateNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉 ";

    document.querySelector(".number").textContent = secrateNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // When Guess Is Too High
  else if (guess > secrateNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too High ↗ ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You Lost the Game  ";
      document.querySelector(".score").textContent = 0;
    }
  }

  // When Guess Is too Low
  else if (guess < secrateNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too Less ↙ ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You Lost the Game  ";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// Game restart

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
