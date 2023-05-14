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
        return winMessage;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return winMessage;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return winMessage;
    }
    else if(playerSelection === computerSelection){
        return 'Draw';
    }
    else return loseMessage;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));