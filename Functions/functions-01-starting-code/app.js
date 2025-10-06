const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting...");
}

// Anonymous function
const start = function () {
  console.log("Game is starting inside of this anonymous function...");
};

// Function declaration and function expressions
start();

// Rock Paper and Scissors
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_SELECT = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

// Player choice
const getPlayerSelection = function () {
  const playerSelect = prompt(
    `Pick: ${ROCK}, ${PAPER} or ${SCISSORS}`,
  ).toUpperCase();

  if (
    playerSelect !== ROCK &&
    playerSelect !== PAPER &&
    playerSelect !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_SELECT} for you!`);

    return DEFAULT_USER_SELECT;
  }

  return playerSelect;
};

// Computer choice
const getComputerChoice = function () {
  // Computer random choice
  const randomValue = Math.random();

  console.log(randomValue);

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

// (Event listener function ) - Passing a reference to this anonymous function
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  console.log(
    "Anonymous function that is inside of a event listener function currently running...",
  );

  const playerSelection = getPlayerSelection();

  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice, playerSelection);

  console.log(winner);
  console.log(computerChoice);
  console.log("Hello");
});

// Spread operators
const numbers = [1, 2, 3, 4, 5];
// Copy the array using the spread operators
const copyNumbers = [...numbers];

/* Introducing Rest Parameters
    1. it should be the last argument
    2. and it should be only one parameter
*/
const sumUp = (...numbers) => {
  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }

  return sum;
};

// Special variable if you're using function keyword (arguments) - ES6
const subtract = function () {
  let result = numbers[0];

  for (const num of arguments) {
    result -= num;
  }

  return result;
};

console.log(sumUp(1, 2, 3, 4, 5));
console.log(subtract(20, 5, 10));

// Passing another pointer to the other function
// Call bank functions - it's called for you by something else, can't control when exactly it's called.
