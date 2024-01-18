let possibleChoices = ['rock', 'paper', 'scissors'];
let randomChoice = () => possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

let computerChoice = randomChoice();
let getPlayerChoice = () => prompt('Rock, Paper or Scissors?', randomChoice());

let playerScore = 0;
let computerScore = 0;

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
    } else if (!possibleChoices.includes(playerChoice)) {
        console.log(invalidInputMessage);
    }

    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log(winMessage);
                playerScore++;
            } else if (computerChoice === 'paper') {
                console.log(defeatMessage);
                computerScore++;
            }
            break;
        case 'paper':
                if (computerChoice === 'rock') {
                    console.log(winMessage);
                    playerScore++;
                } else if (computerChoice === 'scissors') {
                    console.log(defeatMessage);
                    computerScore++;
                }
                break;
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log(winMessage);
                playerScore++;
            } else if (computerChoice === 'rock') {
                console.log(defeatMessage);
                computerScore++;
            }
            break;
        
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), computerChoice);
    }

    console.log(`Score:
    Player: ${playerScore} -- Computer: ${computerScore}`);
}

game();