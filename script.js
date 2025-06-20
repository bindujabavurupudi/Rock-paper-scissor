let playerScore = 0;
let computerScore = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');  
let scissor = document.querySelector('#scissor');
let youText = document.querySelector('#para1');
let compText = document.querySelector('#para2');
let result = document.querySelector('.result');

const choices = ["rock", "paper", "scissor"];
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        result.innerText = "It's a tie!";
        result.style.backgroundColor = "yellow";
        result.style.color = "black";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
    ) {
        playerScore++;
        youText.innerText = playerScore;
        result.style.backgroundColor = "green";
        result.style.color = "white";
        result.innerText = `You win! 🎉 ${playerSelection} defeats ${computerSelection}`;
    } else {
        computerScore++;
        compText.innerText = computerScore;
        result.style.backgroundColor = "red";
        result.style.color = "white";
        result.innerText = `You lose! 😢 ${computerSelection} defeats ${playerSelection}`;
    }
}
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}
rock.addEventListener("click", () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
});
paper.addEventListener("click", () => {
    let computerSelection = computerPlay();

    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});
scissor.addEventListener("click", () => {
    let playerSelection = "scissor";
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
});
