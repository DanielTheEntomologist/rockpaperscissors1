"use strict";

let moves = ["kamień", "papier", "nożyce"];

// get random number between 0 and 2
let randomNumber = Math.floor(Math.random() * 3);
let computerMove = moves[randomNumber];

let playerMove = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

if (playerMove == "1") {
  playerMove = "kamień";
} else if (playerMove == "2") {
  playerMove = "papier";
} else if (playerMove == "3") {
  playerMove = "nożyce";
} else {
  playerMove = "nieznany ruch";
}

printMessage(`Twój ruch to: ${playerMove}`);
printMessage("Mój ruch to: " + computerMove);

if (computerMove == playerMove) {
  printMessage("Remis!");
} else if (computerMove == "kamień" && playerMove == "nożyce") {
  printMessage("Ja wygrywam!");
} else if (computerMove == "papier" && playerMove == "kamień") {
  printMessage("Ja wygrywam!");
} else if (computerMove == "nożyce" && playerMove == "papier") {
  printMessage("Ja wygrywam!");
} else {
  printMessage("Ty wygrywasz!");
}
