//GENERATE random num between 1 and 3
//IF num is 1
//  comp picks rock
//IF num is 2
//  comp picks paper
//ELSE
//  comp picks scissors
//RETURN comp's choice

const log = console.log;

log("Do you want to play a game? Y/N")

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) return "rock";
    if (randomNum === 2) return "paper";
    else
        return "scissors";
} 

//GET human choice
//VALIDATE case to prevent errors
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    
    //validate choice is a legal choice
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    }
    return choice;
}

let meatsackScore = 0;
let sillyconeScore = 0;

function playRound(meatsackChoice, sillyconeChoice) {
    if (meatsackChoice === sillyconeChoice) 
        return "It's a tie!"
    if (meatsackChoice === "rock" && sillyconeChoice === "paper") {
        sillyconeScore++;
        return "You lose! Paper covers Rock!"
    }
    if (meatsackChoice === "paper" && sillyconeChoice === "scissors") {
        sillyconeScore++;
        return "You lose! Scissors cuts Paper!"
    }
    if (meatsackChoice === "scissors" && sillyconeChoice === "rock") {
        sillyconeScore++;
        return "You lose! Rock smashes Scissors!"
    }
    if (meatsackChoice === "rock" && sillyconeChoice === "scissors") {
        meatsackScore++;
        return "You win! Rock smashes Scissors!"
    }
    if (meatsackChoice === "paper" && sillyconeChoice === "rock") {
        meatsackScore++;
        return "You win! Paper covers Rock!"
    }
    if (meatsackChoice === "scissors" && sillyconeChoice === "paper") {
        meatsackScore++;
        return "You lose! Scissors cuts Paper!"
    }
}

const meatsackChoice = getHumanChoice();
const sillyconeChoice = getComputerChoice();

const result = playRound(meatsackChoice, sillyconeChoice);
log(result);
document.getElementById('result').textContent = result;