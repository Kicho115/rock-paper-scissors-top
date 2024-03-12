let possibleChoices = ['rock', 'paper', 'scissors'];
let possibleChoicesIcons = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

let randomChoice = () => possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

let playerScore = 0;
let computerScore = 0;

let playerScoreDisplay = document.getElementById('playerScore');
let computerScoreDisplay = document.getElementById('computerScore');
let playerChoiceIcon = document.getElementById('playerChoice');
let computerChoiceIcon = document.getElementById('computerChoice');
let message = document.getElementById('message');

let selections = document.getElementById('selections');

// Game
selections.addEventListener('click', (e) => {
    let computerChoice = randomChoice();
    let playerChoice = e.target.id;
    playerChoiceIcon.innerText = possibleChoicesIcons[playerChoice];
    computerChoiceIcon.innerText = possibleChoicesIcons[computerChoice];
    playRound(playerChoice, computerChoice);
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
});

function playRound(playerChoice, computerChoice) {
    // Make the player choice case-insensitive
    playerChoice = playerChoice.toLowerCase();

    let winMessage =   `You Win! ${playerChoice} beats ${computerChoice}`;
    let defeatMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let tieMessage = "It's a Tie!";
    let invalidInputMessage = `${playerChoice} is not a valid input`;

    if (playerChoice === computerChoice) {
        console.log(tieMessage);
        message.innerText = tieMessage;
        return;
    } else if (!possibleChoices.includes(playerChoice)) {
        console.log(invalidInputMessage);
    }

    switch(playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log(winMessage);
                message.innerText = winMessage;
                playerScore++;
            } else if (computerChoice === 'paper') {
                console.log(defeatMessage);
                message.innerText = defeatMessage;
                computerScore++;
            }
            break;
        case 'paper':
                if (computerChoice === 'rock') {
                    console.log(winMessage);
                    message.innerText = winMessage;
                    playerScore++;
                } else if (computerChoice === 'scissors') {
                    console.log(defeatMessage);
                    message.innerText = defeatMessage;
                    computerScore++;
                }
                break;
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log(winMessage);
                message.innerText = winMessage;
                playerScore++;
            } else if (computerChoice === 'rock') {
                console.log(defeatMessage);
                message.innerText = defeatMessage;
                computerScore++;
            }
            break;
        
    }

    scoreCheck();
}

// Check if the score of either player is 5
function scoreCheck() {
    if (playerScore === 5) {
        // player wins
        console.log('ganas');
    }
    else if (computerScore === 5) {
        //computer wins
        console.log('pierdes');
    }
}

function restartGame() {
    
}