Selection = ["rock", "paper", "scissors"];
const playerSelection = document.querySelectorAll(".inputs");
const updatePlayerPoint = document.querySelector(".Player-point-text");
const updateComputerPoint = document.querySelector(".Computer-point-text");
const UPDATECOMPUTERSIGN = document.querySelector(".computer-sign");
const UPDATEPLAYERSIGN = document.querySelector(".player-sign");

playerPoint = 0;
computerPoint = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Draw");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerPoint += 1;
    } else {
      playerPoint += 1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerPoint += 1;
    } else {
      playerPoint += 1;
    }
  } else {
    if (computerSelection == "rock") {
      computerPoint += 1;
    } else {
      playerPoint += 1;
    }
  }
  UPDATECOMPUTERSIGN.src = "images/computer_" + computerSelection + ".png";
  UPDATEPLAYERSIGN.src = "images/player_" + playerSelection + ".png";
  updatePlayerPoint.innerText = "Player: " + playerPoint;
  updateComputerPoint.innerText = "Computer: " + computerPoint;
}

function getComputerChoice(arrayOfchoices) {
  let x = Math.floor(Math.random() * arrayOfchoices.length);
  return arrayOfchoices[x];
}

let computerSelection;
console.log(playRound(playerSelection, computerSelection));

playerSelection.forEach((button) => {
  button.addEventListener("click", function () {
    computerSelection = getComputerChoice(["rock", "paper", "scissors"]);
    playRound(button.value, computerSelection);
    console.log("clicked");
  });
});
