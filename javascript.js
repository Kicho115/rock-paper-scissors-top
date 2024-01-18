let possibleChoices = ['rock', 'paper', 'scissors'];
let randomChoice = () => possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

let computerChoice = randomChoice();
let getPlayerChoice = () => prompt('Rock, Paper or Scissors?', randomChoice());

function playRound(playerChoice, computerChoice) {
    // Make the player choice case-insensitive
    playerChoice = playerChoice.toLowerCase();

    let winMessage =   `You Win! ${playerChoice} beats ${computerChoice}`;
    let defeatMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let tieMessage = "It's a Tie!";
    let invalidInputMessage = `${playerChoice} is not a valid input`;

    if (playerChoice === computerChoice) {
        console.log(tieMessage);
        return;
    }

    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log(winMessage);
            } else if (computerChoice == 'paper') {
                console.log(defeatMessage);
            } else {
                console.log(invalidInputMessage);
            }
            break;
        case 'paper':
                if (computerChoice == 'rock') {
                    console.log(winMessage);
                } else if (computerChoice == 'scissors') {
                    console.log(defeatMessage);
                } else {
                    console.log(invalidInputMessage);
                }
                break;
        case 'scissors':
            if (computerChoice == 'paper') {
                console.log(winMessage);
            } else if (computerChoice == 'rock') {
                console.log(defeatMessage);
            } else {
                console.log(invalidInputMessage);
            }
            break;
        
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), computerChoice)
    }
}

game()