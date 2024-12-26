// DOM Elements
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameResult = document.getElementById("gameResult");
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}

// Function to update scores
function updateScores() {
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

// Event listeners for choice buttons
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const resultMessage = determineWinner(userChoice, computerChoice);

        gameResult.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${resultMessage}`;
        updateScores();
    });
});