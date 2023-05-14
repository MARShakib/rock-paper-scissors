function getComputerChoice(){
    let n = Math.floor(Math.random() * 3) + 1;
    switch(n){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection){

    let winMessage = 'You Win!!';
    let loseMessage = 'You Lose!! Computer wins';

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        winCount++;
        return winMessage;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        winCount++;
        return winMessage;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        winCount++;
        return winMessage;
    }
    else if(playerSelection === computerSelection){
        return 'Draw';
    }
    else {
        loseCount++;
        return loseMessage;
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

game();