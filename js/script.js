"use strict";

// add event listeners to buttons
document
  .getElementById("startGameButton")
  .addEventListener("click", function () {
    //read the value of the input field and assign it to the variable

    game = new Game();
    let numberOfRounds = Number(
      document.getElementById("numberOfRounds").value
    );
    if (
      numberOfRounds === 0 ||
      numberOfRounds === null ||
      numberOfRounds === undefined
    ) {
      numberOfRounds = 3;
    }

    let strategy1 = document.getElementById("player1Strategy").value;
    let strategy2 = document.getElementById("player2Strategy").value;
    if (strategy1 === "Ask") {
      document.querySelector("#rockButton1").disabled = false;
      document.querySelector("#paperButton1").disabled = false;
      document.querySelector("#scissorsButton1").disabled = false;
    } else {
      document.querySelector("#rockButton1").disabled = true;
      document.querySelector("#paperButton1").disabled = true;
      document.querySelector("#scissorsButton1").disabled = true;
    }

    game.playGame(numberOfRounds, strategy1, strategy2);
    document.getElementById("startGameButton").disabled = true;
    document.getElementById("resetGameButton").disabled = false;
  });

document
  .getElementById("resetGameButton")
  .addEventListener("click", function () {
    //read the value of the input field and assign it to the variable
    clearMessages();
    document.querySelector("#rockButton1").disabled = true;
    document.querySelector("#paperButton1").disabled = true;
    document.querySelector("#scissorsButton1").disabled = true;
    game = null;
    game = new Game();
    document.getElementById("startGameButton").disabled = false;
    document.getElementById("resetGameButton").disabled = true;
  });

let game = new Game();
// game.playGame();
