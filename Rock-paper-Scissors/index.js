function getRandomComputerResult(){
    const options = ["rocks", "scissors", "paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheGame(player, computer){
    return (
        (player === "rocks" && computer === "scissors") ||
        (player === "paper" && computer === "rocks") ||
        (player === "scissors" && computer === "paper")
    )
}

let playerScore = 0;
let computerScore = 0;

function getRoundResult(player){
    const computerChoice = getRandomComputerResult();

    if(hasPlayerWonTheGame(player, computerChoice)){
        playerScore++;
        return `Player wins! ${player} beats ${computerChoice}`;
    } else if(player === computerChoice){
        return `It's a tie! Both chose ${player}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${player}`;
    }
}

const playerScoreEl = document.querySelector("#player-score-element");
const computerScoreEl = document.querySelector("#computer-score-element");
const optionsContainer = document.querySelector(".options-container");
const roundResultsMsg = document.querySelector("#results-msg");
const winnerMsg  = document.querySelector("#winner-msg");
const resetGameBtn = document.querySelector("#reset-game-btn");

function showResults(userOption){
    roundResultsMsg.innerText = getRoundResult(userOption);
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;

    if(playerScore === 3 || computerScore === 3){
        winnerMsg.innerText = `${playerScore === 3? "Player" : "Computer"} wins the game! `;

        resetGameBtn.style.display="block";
        optionsContainer.style.display="none";
    }

    

}

function resetGame(){
    playerScore=0, computerScore =0 ;
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsg.innerText="";
    roundResultsMsg.innerText="";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", ()=>{
    showResults("rocks");
})

paperBtn.addEventListener("click", ()=>{
    showResults("paper");
})

scissorBtn.addEventListener("click", ()=>{
    showResults("scissors");
})