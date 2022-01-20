const selectionButtons = document.querySelectorAll(['[data-selection']);
const userScoreSpan = document.querySelector('[data-user-score]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const finalColumn = document.querySelector('[data-final-column]')
const resultText = document.querySelector("#result-text");
const returnMainBtn = document.querySelector("#retry-btn");
const output = document.querySelector("#roundResults")
document.getElementById('retry-btn').style.visibility = 'hidden';
var userScore = parseInt(0);
var computerScore = parseInt(0);


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const playerSelection = selectionButton.dataset.selection
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        if (userScore === 5 || computerScore === 5) {
            document.getElementById('selection-rock').style.visibility = 'hidden';
            document.getElementById('selection-paper').style.visibility = 'hidden';
            document.getElementById('selection-scissors').style.visibility = 'hidden';
            document.getElementById('roundResults').style.visibility = 'hidden';
            declareWinner();
        }
    })
})

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
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        userScore++
        incrementScore(userScoreSpan)
        roundResults.textContent = (`You won this round, ${playerSelection} beats ${computerSelection}`)

    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        incrementScore(computerScoreSpan)
        roundResults.textContent = (`You lost this round, ${computerSelection} beats ${playerSelection}`)

    } else if (playerSelection == computerSelection) {
        roundResults.textContent = (`It's a tie.`)
    }
}

function restartGame() {
    returnMainBtn.addEventListener('click', () => {
        window.location.reload();
    })
}


function declareWinner() {
    if (userScore > computerScore) {
        resultText.textContent = "You won the game!!!!";
        resultText.style.color = 'blue';
        returnMainBtn.innerText = "Play Again?";
        document.getElementById('retry-btn').style.visibility = 'visible';
        restartGame();
    } else {
        resultText.textContent = "You lost... haha!!!!";
        resultText.style.color = 'red'
        returnMainBtn.innerText = "Try Again?";
        document.getElementById('retry-btn').style.visibility = 'visible';
        restartGame();
    }
}


function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}