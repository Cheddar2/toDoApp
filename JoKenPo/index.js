document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");
  buttonsContainer.addEventListener("click", playerMove);
});

function computerMove() {
  const randomValue = Math.random();
  if (randomValue >= 0 && randomValue < 1 / 3) {
    return "rock";
  }
  if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    return "paper";
  }
  if (randomValue >= 2 / 3 && randomValue <= 1) {
    return "scissors";
  }
}

function playerMove(event) {
  if (event.target.closest(".buttons")) {
    const userChoice = event.target.classList[0];
    console.log("User choice:", userChoice);
    const computerChoice = computerMove();
    const result = compareMoves(userChoice, computerChoice);
    updateScores(result);
  }
}

function compareMoves(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "loss";
  }
}

function updateScores(result) {
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");
  const tiesElement = document.getElementById("ties");

  switch (result) {
    case "win":
      winsElement.textContent = parseInt(winsElement.textContent) + 1;
      break;
    case "loss":
      lossesElement.textContent = parseInt(lossesElement.textContent) + 1;
      break;
    case "tie":
      tiesElement.textContent = parseInt(tiesElement.textContent) + 1;
      break;
  }
}
