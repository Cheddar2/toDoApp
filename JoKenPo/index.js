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
  }
}

function compareMoves() {}

function updateScores() {}

console.log("test1");
