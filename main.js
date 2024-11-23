const log = console.log;

//GET all DOM elements
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');
//event listeners
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

let meatsackScore = 0;
let sillyconeScore = 0;

//generate random num 1-3 and assign variables (rock/paper/scissors to each)
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) return "rock";
    if (randomNum === 2) return "paper";
    else
        return "scissors";
} 

    function playRound(meatsackChoice, sillyconeChoice) {
            let message = '';

        if (meatsackChoice === sillyconeChoice) {
            message = `You threw ${meatsackChoice} - Computer threw ${sillyconeChoice}. It's a tie!`
        }

        else if (meatsackChoice === "rock" && sillyconeChoice === "paper") {
            sillyconeScore++;
            message = `You threw ${meatsackChoice} - Computer threw ${sillyconeChoice}. Paper covers rock. You lose!`
        }

        else if (meatsackChoice === "paper" && sillyconeChoice === "scissors") {
            sillyconeScore++;
            message = `You threw ${meatsackChoice} - Computer threw ${sillyconeChoice}. Scissors cuts paper. You lose!`
        }

        else if (meatsackChoice === "scissors" && sillyconeChoice === "rock") {
            sillyconeScore++;
            message = `You threw ${meatsackChoice} - Computer threw ${sillyconeChoice}. Rock smashes scissorsYou lose!`
        }

        else if (meatsackChoice === "rock" && sillyconeChoice === "scissors") {
            meatsackScore++;
            message = `You threw ${meatsackChoice} - Computer ${sillyconeChoice}. Rock smashes scissors. You win!`
        }

        else if (meatsackChoice === "paper" && sillyconeChoice === "rock") {
            meatsackScore++;
            message = `You threw ${meatsackChoice} - Computer ${sillyconeChoice}. Paper covers rock. You win!`
        }

        else if (meatsackChoice === "scissors" && sillyconeChoice === "paper") {
            meatsackScore++;
            message = `You threw ${meatsackChoice} - Computer ${sillyconeChoice}. Scissors cuts paper. You win!`
        }

        resultDiv.textContent = message;
        resultDiv.textContent += `\nScore: You ${meatsackScore} - Computer ${sillyconeScore}`;

        //check for end game        
        if (meatsackScore === 5 || sillyconeScore === 5) {
            const winner = meatsackScore === 5 ? "You win the game!" : "Computer wins the game!";
            resultDiv.textContent += `\n${winner}`;
            
            // Disable game buttons
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            
            // Show reset button
            resetBtn.style.display = 'block';
        }
        
    }

//reset game
function resetGame() {
    meatsackScore = 0;
    sillyconeScore = 0;
    resultDiv.textContent = "Game Reset! Choose your weapon!";
    
    // Show the game buttons again
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    
    // Hide the reset button
    resetBtn.style.display = 'none';
}

resetBtn.addEventListener('click', resetGame);


rockBtn.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    playRound('rock', ComputerChoice)
});

paperBtn.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    playRound('paper', ComputerChoice)
});

scissorsBtn.addEventListener('click', () => {
    const ComputerChoice = getComputerChoice();
    playRound('scissors', ComputerChoice)
});



