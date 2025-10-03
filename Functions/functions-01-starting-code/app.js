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

// (Event listener function ) - Passing a reference to this anonymous function
startGameBtn.addEventListener("click", function() {
    console.log("Anonymous function that is inside of a event listener function currently running...");
});