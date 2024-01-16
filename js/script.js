"use strict";

function moveToString(moveNumber) {
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
}

function determineWinner(computerMove, playerMove) {
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
}

function displayResult(computerMove, playerMove, winner) {
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
}

function playGame(playerInput) {
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
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
