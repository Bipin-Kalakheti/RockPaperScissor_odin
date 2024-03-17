Selection = ['rock','paper','scissors']
playerPoint = 0;
computerPoint = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Draw");
  }
  else if (playerSelection == 'rock') {
    if (computerSelection == 'paper'){
      computerPoint += 1;
    }
    else {
      playerPoint += 1;
    }
  }
  else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      computerPoint += 1;
    }
    else {
      playerPoint += 1;
    }
  }
  else {
    if (computerSelection == 'rock')
      {
        computerPoint += 1;
      }
    else {
      playerPoint += 1;
    }
  }
  
}

function getComputerChoice(arrayOfchoices) {
  let x = Math.random() * arrayOfchoices.length;
  return arrayOfchoices[x];
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
