const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log("Game is starting...");
}

// Anonymous function
const start = function() {
  console.log("Game is starting inside of this anonymous function...");
};

// Function declaration and function expressions
start();

// Rock Paper and Scissors
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_SELECT = ROCK;

let gameIsRunning = false;

const getPlayerSelection = function() {

  const playerSelect = prompt(`Pick: ${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();

  if (playerSelect !== ROCK &&
      playerSelect !== PAPER &&
      playerSelect !== SCISSORS) {

      alert(`Invalid choice! We chose ${DEFAULT_USER_SELECT} for you!`);

      return DEFAULT_USER_SELECT;

  }

  return playerSelect;

};

// (Event listener function ) - Passing a reference to this anonymous function
startGameBtn.addEventListener("click", function() {

    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;

    console.log("Anonymous function that is inside of a event listener function currently running...");
    const playerSelection = getPlayerSelection();
    console.log(playerSelection);
});