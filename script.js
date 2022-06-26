function getRandomNumber() {
  return Math.floor(Math.random() * 3);
} 

function computerPlay () {
  let playNumber = getRandomNumber();

  switch (playNumber) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper"
      break;
    case 2:
      return "Scissors"
      break;
    }
}

function formatWord(wordToFormat) {
  return wordToFormat.charAt(0).toUpperCase() + wordToFormat.slice(1).toLowerCase();
}

function roundPlay(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Tie game!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
               (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') ||
               (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
                return `You win! ${formatWord(playerSelection)} beats ${formatWord(computerSelection)}`;
               } else {
                return `You lose! ${formatWord(computerSelection)} beats ${formatWord(playerSelection)}`;
               }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(roundPlay(prompt(), computerPlay()));
    }
}