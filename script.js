
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

let gameStarted = false; // tracks if game has started

    function bombButtonChance() {
        if (!gameStarted) return;

        // remove any existing bomb button to avoid duplicates
        const existingBombButton = document.getElementById('bomb');
        if (existingBombButton) {
            existingBombButton.remove();
        }


        const rand = Math.random() * 100;
        console.log(`Random number: ${rand}`); //debugging
        if (rand <= 50){
            console.log('Bomb button created'); // debugging
            const bombButton = document.createElement('button');
            bombButton.textContent = 'bomb?';
            bombButton.id = 'bomb';
            const menu = document.querySelector('.menu');
            menu.appendChild(bombButton);
            
            //event listener for when bomb button is clicked
            bombButton.addEventListener('click', () => {
                alert('you found the secret ending!');
                location.reload();
            })
        }
    };
 
// Main Game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
   
    function noTitle() {
        const titleCard = document.getElementById("title-card");
        titleCard.remove(); 
    };

    bombButtonChance();

    //plays one round of the game
    function playRound(userChoice, computerChoice) {
        const choice = document.querySelector('#choice');
        if (userChoice === computerChoice){
            choice.textContent = `It's a tie! Try Again!`
            return;
        }
        if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
            choice.textContent = `Human wins! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
            playerScore++;
        }
        else if (userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'scissors'){
            choice.textContent = `Computer wins! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}!`
            computerScore++;
        }
        else if (userChoice === 'bomb'){
            alert('You got the secret ending!');
            restartGame();
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
            gameStarted = true;
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
        case 'bomb':
            userChoice = 'bomb';
            break;
    }
    gameStarted = true;
    playRound(userChoice,computerChoice);
    playResults(playerScore,computerScore);
    noTitle();
    bombButtonChance();
});
};



 playGame();