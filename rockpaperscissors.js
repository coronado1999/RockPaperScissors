function computerPlay() {
    let pickRandom = Math.random();

    if (pickRandom <= 0.3333) {
        return "paper";
    } else if (pickRandom >= 0.6666) {
        return "rock";
    } else {
        return "scissors";
    }
}



function playRound(playerSelection, computerSelection) {
    console.log("player", playerSelection)
    console.log("computerSelection", computerSelection)

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return lose;
    } else if (playerSelection == computerSelection) {
        return tie;
    }


}



var userScore = parseInt(0);
var computerScore = parseInt(0);
var win = "You won."
var lose = "You lose"
var tie = "Tie"
var overallWin = "You won the game."
var overallLose = "You lost the game."
var overallTie = "The game ended in a tie."


function playGame() {
    if (userScore > computerScore) {
        return overallWin;
    } else if (userScore < computerScore) {
        return overallLose;
    } else if (userScore == computerScore) {
        return overallTie;
    }
}

for (var i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick Rock, Paper or Scissors.");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
}

console.log(playGame());
