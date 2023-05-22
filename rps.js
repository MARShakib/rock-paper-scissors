function getComputerChoice(){
    let n = Math.floor(Math.random() * 3) + 1;
    switch(n){
        case 1:
            computerTurn.textContent = '✊';
            return 'rock';
            break;
        case 2:
            computerTurn.textContent = '✋';
            return 'paper';
            break;
        case 3:
            computerTurn.textContent = '✌';
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection){

    let winMessage = 'You Won!!';
    let loseMessage = 'You Lost!!';

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        winCount++;
        scoreResult.textContent = winMessage;
        scoreMessage.textContent = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        winCount++;
        scoreResult.textContent = winMessage;
        scoreMessage.textContent = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        winCount++;
        scoreResult.textContent = winMessage;
        scoreMessage.textContent = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    }
    else if(playerSelection === computerSelection){
        scoreResult.textContent = 'It\'s a draw';
        scoreMessage.textContent = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection}`;
    }
    else {
        loseCount++;
        scoreResult.textContent = loseMessage;
        scoreMessage.textContent = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} is beaten by ${computerSelection}`;
    }
}

let playerSelection;
let computerSelection;
let winCount = 0;
let loseCount = 0;

function btnClick(e){
    if(this.getAttribute('id') === 'rock'){
        playerTurn.textContent = '✊';
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
        checkResult();
    }
    else if(this.getAttribute('id') === 'paper'){
        playerTurn.textContent = '✋';
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
        checkResult();
    }
    else {
        playerTurn.textContent = '✌';
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
        checkResult();
    }
}

function updateScore(){
    playerScore.textContent = `Player : ${winCount}`;
    computerScore.textContent = `Computer : ${loseCount}`;
}

function checkResult(){
    if(winCount >= 5){
        console.log('you won');
        console.log(`you : ${winCount}, computer : ${loseCount}`);
        resetGame();
    }
    else if(loseCount >= 5){
        console.log('you lost');
        console.log(`you : ${winCount}, computer : ${loseCount}`);
        resetGame();
    }
    else return;
}

function resetGame(){
    winCount = 0;
    loseCount = 0;
    scoreResult.textContent = 'Choose Your Weapon';
    scoreMessage.textContent = 'Score 5 points to win the game';
    playerTurn.textContent = '❔';
    computerTurn.textContent = '❔';
    playerScore.textContent = 'Player : 0';
    computerScore.textContent = 'Computer : 0';
}

const scoreResult = document.querySelector('#scoreResult');
const scoreMessage = document.querySelector('#scoreMessage');
const playerTurn = document.querySelector('.playerTurn');
const computerTurn = document.querySelector('.computerTurn');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', btnClick));