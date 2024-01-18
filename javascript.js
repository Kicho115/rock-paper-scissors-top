let possibleChoices = ['rock', 'paper', 'scissors'];
let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

let computerChoice = randomChoice;
let playerChoice = prompt('Rock, Paper or Scissors?', randomChoice);

let winMessage =   `You Win! ${computerChoice} beats ${playerChoice}`;
let defeatMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
let tieMessage = "It's a Tie!";


