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

    let winMessage = 'You Win!!';
    let loseMessage = 'You Lose!! Computer wins';

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

function game(){
    winCount = 0;
    loseCount = 0;
    for(let i =0; i<5; i++){
        playerSelection = prompt('Your Turn').toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`you : ${playerSelection}`);
        console.log(`Computer : ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
    if(winCount > loseCount){
        console.log('Yoo!! You win!!');
    }
    else if(loseCount > winCount){
        console.log('Ooops!! You Lose!!');
    }
    else console.log('It\'s a draw');
}

//game();

function btnClick(e){
    if(this.getAttribute('id') === 'rock'){
        playerTurn.textContent = '✊';
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
    }
    else if(this.getAttribute('id') === 'paper'){
        playerTurn.textContent = '✋';
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
    }
    else {
        playerTurn.textContent = '✌';
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateScore();
    }
}

function updateScore(){
    playerScore.textContent = `Player : ${winCount}`;
    computerScore.textContent = `Computer : ${loseCount}`;
}

const scoreResult = document.querySelector('#scoreResult');
const scoreMessage = document.querySelector('#scoreMessage');
const playerTurn = document.querySelector('.playerTurn');
const computerTurn = document.querySelector('.computerTurn');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', btnClick));