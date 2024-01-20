"use strict";
const main = function () {
  const moveToString = function (moveNumber) {
    let moveName = "";
    if (moveNumber == "1" || moveNumber == 1) {
      moveName = "kamień";
    } else if (moveNumber == "2" || moveNumber == 2) {
      moveName = "papier";
    } else if (moveNumber == "3" || moveNumber == 3) {
      moveName = "nożyce";
    } else {
      moveName = "nieznany ruch";
    }
    return moveName;
  };

  const determineWinner = function (computerMove, playerMove) {
    if (computerMove == playerMove) {
      return "Tie";
    } else if (computerMove == "kamień" && playerMove == "nożyce") {
      return "ComputerWin";
    } else if (computerMove == "papier" && playerMove == "kamień") {
      return "ComputerWin";
    } else if (computerMove == "nożyce" && playerMove == "papier") {
      return "ComputerWin";
    } else {
      return "PlayerWin";
    }
  };

  const displayResult = function (computerMove, playerMove, winner) {
    printMessage("Zagrałem " + computerMove + ", a Ty " + playerMove);
    if (winner == "Tie") {
      printMessage("Remis!");
    } else if (winner == "ComputerWin") {
      printMessage("Ja wygrywam!");
    } else if (winner == "PlayerWin") {
      printMessage("Ty wygrywasz!");
    } else {
      printMessage("Błąd!");
    }
  };

  const playGame = function (playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = moveToString(randomNumber);
    console.log("Ruch komputera to: " + computerMove);
    const playerMove = moveToString(playerInput);
    console.log("Twój ruch to: " + playerMove);

    const winner = determineWinner(computerMove, playerMove);
    console.log("Wynik to: " + winner);

    displayResult(computerMove, playerMove, winner);
  };

  const rockButton = document.getElementById("play-rock");
  const paperButton = document.getElementById("play-paper");
  const scissorsButton = document.getElementById("play-scissors");

  rockButton.addEventListener("click", function () {
    playGame(1);
  });
  paperButton.addEventListener("click", function () {
    playGame(2);
  });
  scissorsButton.addEventListener("click", function () {
    playGame(3);
  });
};

main();
