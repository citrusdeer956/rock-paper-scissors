let playerScore = 0;
let computerScore = 0;
let userInput = prompt('Rock, Paper, or Scissors?');
userInput = userInput.toLowerCase();

const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        return 'N/A';
    }
}


function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}



function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return  "It's a tie!";
    }

    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'Computer has won!';
        } else {
            return 'You have won!';
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'Computer has won!';
        } else {
            return 'You have won!';
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Computer has won!';
        } else {
            return 'You have won!';
        }
    }
    if (userChoice === 'bomb'){
        return 'KABOOM! You got a secret ending!';
    }
}

function playGame() {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);

    alert(determineWinner(userChoice, computerChoice));
}

playGame();