"use strict";

// declare a class named Strategy
class Strategy {
  constructor() {
    this.name = null;
  }
  getMove() {
    return "stone";
  }
}

class RandomStrategy extends Strategy {
  constructor() {
    super();
    this.name = "Random";
  }
  getMove() {
    const moves = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }
}

class Game {
  constructor() {
    this.player1 = new RandomStrategy();
    this.player2 = new RandomStrategy();
    this.player1Score = 0;
    this.player2Score = 0;
    this.round = 0;
    this.maxRounds = 3;
  }
  // declare a method named getMove
  async playRound() {
    this.round++;
    const player1Move = this.player1.getMove();
    const player2Move = this.player2.getMove();

    printMessage(`Round ${this.round}:`);
    printMessage(`Player 1 move: ${player1Move}`);
    printMessage(`Player 2 move: ${player2Move}`);

    if (player1Move === player2Move) {
      printMessage("This round is a tie!");
    } else if (
      (player1Move === "stone" && player2Move === "scissors") ||
      (player1Move === "paper" && player2Move === "stone") ||
      (player1Move === "scissors" && player2Move === "paper")
    ) {
      this.player1Score++;
      printMessage("Player 1 wins the round!");
    } else {
      this.player2Score++;
      printMessage("Player 2 wins the round!");
    }
  }
  playGame() {
    clearMessages();
    while (this.round < this.maxRounds) {
      this.playRound();
    }
    printMessage("Game over!");
    if (this.player1Score > this.player2Score) {
      printMessage("Player 1 wins the game!");
    } else if (this.player1Score < this.player2Score) {
      printMessage("Player 2 wins the game!");
    } else {
      printMessage("The game is a tie!");
    }
  }
}

// class AskForMoveStrategy extends Strategy {
//   constructor() {
//     super();
//     this.name = "AskForMove";
//   }
//   askForMove() {
//     const move = prompt("Enter your move: stone, paper or scissors");
//     return move;
//   }

//   getMove() {
//     this.move = null;
//     this.move = this.askForMove();

//     while (move !== "stone" && move !== "paper" && move !== "scissors") {
//       printMessage(`${move} is an invalid move! Try again.`);
//       console.log(`${move} is an invalid move! Try again.`);
//       setTimeout(this.askForMove(), 1000);
//     }
//     return this.move;
//   }
// }
