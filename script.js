
//Generates computer choice and returns value
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
};
 

function playGame() {
    let playerScore = 0;
    let computerScore = 0;


    //plays one round of the game
    function playRound(userChoice, computerChoice) {
        const choice = document.querySelector('#choice');
        while (userChoice === computerChoice){
            choice.textContent = `It's a tie! Try Again!`
            break;
        }
        if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
            choice.textContent = `Human wins! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
            playerScore++;
        }
        if (userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'scissors'){
            choice.textContent = `Computer wins! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}!`
            computerScore++;
        }
    };

    const menu = document.querySelector('.menu');

    // restarts game
    function restartGame() {
        const restartButton = document.createElement('button');
        restartButton.textContent = "Play again?";
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            menu.removeChild(button);
        });
        menu.appendChild(restartButton);
        restartButton.addEventListener('click', () => {
            location.reload();
        }) 
    }

    //check if either player reaches score of 5
    function playResults(playerScore, computerScore){
        const results = document.querySelector('#results');
        results.textContent= `You: ${playerScore} Computer: ${computerScore}`;
        if (playerScore === 5){
            results.textContent = `YOU WON! ${playerScore} versus ${computerScore}.`;
            restartGame();
        } else if (computerScore === 5) {
            results.textContent = `YOU LOST! ${computerScore} versus ${playerScore}.`
            restartGame();
        }
        };

    
    //changes userChoice pending on user input    
    menu.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    let userChoice = '';

    switch(target.id) {
        case 'rock':
            userChoice = 'rock';
            break;
        case 'paper':
            userChoice = 'paper';
            break;
        case 'scissors':
            userChoice = 'scissors';
            break;
    }
    playRound(userChoice,computerChoice);
    playResults(playerScore,computerScore);
});
};



 playGame();