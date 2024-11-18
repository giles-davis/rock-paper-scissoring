const log = console.log;

//generate random num 1-3 and assign variables (rock/paper/scissors to each)
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) return "rock";
    if (randomNum === 2) return "paper";
    else
        return "scissors";
} 

//GET human choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    
    //validate choice is a legal choice
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    }
    return choice;
}

function playGame() {
    let meatsackScore = 0;
    let sillyconeScore = 0;

    function playRound(meatsackChoice, sillyconeChoice) {
        if (meatsackChoice === sillyconeChoice) {
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} It's a tie!`)
            return "It's a tie!"
        }

        if (meatsackChoice === "rock" && sillyconeChoice === "paper") {
            sillyconeScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} You lose! Computer chose Paper, Paper covers Rock!`)
            return "You lose! Computer threw Paper, Paper covers Rock!"
        }

        if (meatsackChoice === "paper" && sillyconeChoice === "scissors") {
            sillyconeScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You lose! Computer chose Scissors, Scissors cuts Paper!`)
            return "You lose! Computer threw Scissors, Scissors cuts Paper!"
        }

        if (meatsackChoice === "scissors" && sillyconeChoice === "rock") {
            sillyconeScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} You lose! Computer threw Rock, Rock smashes Scissors!`)
            return "You lose! Computer chose Rock, Rock smashes Scissors!"
        }

        if (meatsackChoice === "rock" && sillyconeChoice === "scissors") {
            meatsackScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} You win! Computer threw scissors, Rock smashes scissors!`)
            return "You win! Computer threw Scissors, Rock smashes Scissors!"
        }

        if (meatsackChoice === "paper" && sillyconeChoice === "rock") {
            meatsackScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} You win! Computer threw Rock, Paper covers Rock`)
            return "You win! Computer chose Rock, Paper covers Rock!"
        }

        if (meatsackChoice === "scissors" && sillyconeChoice === "paper") {
            meatsackScore++;
            log(`score after round: You ${meatsackScore} - Computer ${sillyconeScore}`)
            alert(`You threw: ${meatsackChoice} - Computer threw: ${sillyconeChoice} You win! Computer threw Paper, Scissors cuts Paper!`)
            return "You win! Computer chose paper, Scissors cuts Paper!"
        }
    }
        
    //round 1
    log("Round 1:");
    const meatsackChoice1 = getHumanChoice();
    const sillyconeChoice1 = getComputerChoice();
    const result1 = playRound(meatsackChoice1, sillyconeChoice1);
    log(result1);

    // Round 2
    log("Round 2:");
    const meatsackChoice2 = getHumanChoice();
    const sillyconeChoice2 = getComputerChoice();
    const result2 = playRound(meatsackChoice2, sillyconeChoice2);
    log(result2);

    // Round 3
    log("Round 3:");
    const meatsackChoice3 = getHumanChoice();
    const sillyconeChoice3 = getComputerChoice();
    const result3 = playRound(meatsackChoice3, sillyconeChoice3);
    log(result3);

    // Round 4
    log("Round 4:");
    const meatsackChoice4 = getHumanChoice();
    const sillyconeChoice4 = getComputerChoice();
    const result4 = playRound(meatsackChoice4, sillyconeChoice4);
    log(result4);

    // Round 5
    log("Round 5:");
    const meatsackChoice5 = getHumanChoice();
    const sillyconeChoice5 = getComputerChoice();
    const result5 = playRound(meatsackChoice5, sillyconeChoice5);
    log(result5);


    // Declare winner
    let finalResult;
    if (meatsackScore > sillyconeScore) {
        finalResult = "You win the game!";
    } else if (sillyconeScore > meatsackScore) {
        finalResult = "Computer wins the game!";
    } else {
        finalResult = "It's a tie game!";
    }

    document.getElementById('result').textContent = 
        `Final Score: Human ${meatsackScore} - Computer ${sillyconeScore}\n${finalResult}`;
}        

// Call playGame to start
playGame();