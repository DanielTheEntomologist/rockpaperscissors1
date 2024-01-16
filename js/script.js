"use strict";

let moves = ["kamień", "papier", "nożyce"];

// get random number between 0 and 2
let randomNumber = Math.floor(Math.random() * 3);
let computerMove = moves[randomNumber];
