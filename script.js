const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const compStats = document.getElementById('computer-score');
const playerStats = document.getElementById('player-score');
const resultsStringElem = document.getElementById('choose-text');

rockButton.addEventListener('click', () => buttonHandle('rock'));
paperButton.addEventListener('click', () => buttonHandle('paper'));
scissorsButton.addEventListener('click', () => buttonHandle('scissors'));

function buttonHandle(playerSelection) {
  const computerSelection = computerPlay();
  roundPlay(playerSelection, computerSelection);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
} 

function computerPlay () {
  let playNumber = getRandomNumber();

  switch (playNumber) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return "Scissors";
      break;
    }
}

function changeResults(winner) {
  switch (winner) {
    case 'comp':
      ++compStats.innerHTML;
      checkForWin(compStats.innerHTML, 'Computer')
      break;
    case 'player':
      ++playerStats.innerHTML;
      checkForWin(playerStats.innerHTML, 'You')
      break;
  }
}

function clearScore() {
  compStats.innerHTML = 0;
  playerStats.innerHTML = 0;
}

function checkForWin(score, winner) {
  if (score == 5) {
    confirm(`${winner} won! Play again?`);
    clearScore();
    resultsStringElem.innerHTML = 'Choose carefully!';
  }
}

function showResults(resultsString) {
   resultsStringElem.innerHTML = resultsString;
}

function formatWord(wordToFormat) {
  return wordToFormat.charAt(0).toUpperCase() + wordToFormat.slice(1).toLowerCase();
}

function roundPlay(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    showResults('Tie game!');
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
               (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') ||
               (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
                showResults(`You win! ${formatWord(playerSelection)} beats ${formatWord(computerSelection)}`);
                changeResults('player');
               } else {
                showResults(`You lose! ${formatWord(computerSelection)} beats ${formatWord(playerSelection)}`);
                changeResults('comp');
               }
}