const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");
// Declare outside and maintain the array properly
const diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;

let rolls = 0;

rollDiceBtn.addEventListener("click", () => {
    diceValuesArr.length = 0; // Clear the array instead of reassigning

    for (let i = 0; i < 5; i++) {
        const randomValue = Math.floor(Math.random() * 6 + 1); // Generate random dice value
        diceValuesArr.push(randomValue); // Add to the array
        listOfAllDice[i].textContent = `${randomValue}`; // Update UI
    }

    console.log("Dice Values:", diceValuesArr); // Check values in the console
});


rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});


rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;
        rollDice();

    }
});