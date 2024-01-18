let possibleChoices = ['rock', 'paper', 'scissors'];
let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

let computerChoice = randomChoice;
let playerChoice = prompt('Rock, Paper or Scissors?', randomChoice);

function playRound(playerChoice, computerChoice) {
    // Make the player choice case-insensitive
    playerChoice = playerChoice.toLowerCase();

    let winMessage =   `You Win! ${computerChoice} beats ${playerChoice}`;
    let defeatMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let tieMessage = "It's a Tie!";

    switch(playerChoice) {
        case 'rock':
            if (computerChoice == 'scissors') {
                console.log(winMessage)
            } else if (computerChoice == 'paper') {
                console.log(defeatMessage)
            } else {
                console.log(tieMessage)
            }
            break;
        case 'paper':
                if (computerChoice == 'rock') {
                    console.log(winMessage)
                } else if (computerChoice == 'scissors') {
                    console.log(defeatMessage)
                } else {
                    console.log(tieMessage)
                }
                break;
        case 'scissors':
            if (computerChoice == 'paper') {
                console.log(winMessage)
            } else if (computerChoice == 'rock') {
                console.log(defeatMessage)
            } else {
                console.log(tieMessage)
            }
            break;
        
    }

}

playRound(playerChoice, computerChoice)