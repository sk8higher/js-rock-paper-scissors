function getRandomNumber() {
    return Math.floor(Math.random() * 3);
} 

function computerPlay () {
    let playNumber = getRandomNumber();

    switch (playNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
}

function roundPlay(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper";
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    } else {
        return "Tie game!";
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(roundPlay(prompt(), computerPlay()));
    }
}