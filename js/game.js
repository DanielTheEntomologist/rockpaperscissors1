"use strict";

// is this a correct way to declare a base class?
class Strategy {
  constructor() {
    this.name = null;
  }
  getMove() {
    return null;
  }
}

class RockStrategy extends Strategy {
  constructor() {
    super();
    this.name = "Rock";
  }
  getMove() {
    return "rock";
  }
}

class PaperStrategy extends Strategy {
  constructor() {
    super();
    this.name = "Paper";
  }
  getMove() {
    return "paper";
  }
}

class ScissorsStrategy extends Strategy {
  constructor() {
    super();
    this.name = "Scissors";
  }
  getMove() {
    return "scissors";
  }
}

// is this a correct way to use inheritance?
class RandomStrategy extends Strategy {
  constructor() {
    super();
    this.name = "Random";
  }
  getMove() {
    const moves = ["rock", "paper", "scissors"];
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
    this.scoreDisplay = document.querySelector("#score");
    this.round = 0;
    this.maxRounds = 3;
  }
  setScoreDisplay() {
    this.scoreDisplay.innerHTML = `${this.player1Score} : ${this.player2Score}`;
  }
  // declare a method named getMove
  async playRound() {
    this.round++;
    const player1Move = await this.player1.getMove();
    const player2Move = this.player2.getMove();

    printMessage(`Round ${this.round}:`);
    printMessage(`Player 1 move: ${player1Move}`);
    printMessage(`Player 2 move: ${player2Move}`);

    if (player1Move === player2Move) {
      printMessage("This round is a tie!");
    } else if (
      (player1Move === "rock" && player2Move === "scissors") ||
      (player1Move === "paper" && player2Move === "rock") ||
      (player1Move === "scissors" && player2Move === "paper")
    ) {
      this.player1Score++;
      printMessage("Player 1 wins the round!");
    } else {
      this.player2Score++;
      printMessage("Player 2 wins the round!");
    }
    this.setScoreDisplay();
  }

  async playGame(maxRounds, player1Strategy, player2Strategy) {
    this.maxRounds = maxRounds;

    // choose strategy for player1
    if (player1Strategy === "Random") {
      this.player1 = new RandomStrategy();
    } else if (player1Strategy === "AlwaysRock") {
      this.player1 = new RockStrategy();
    } else if (player1Strategy === "AlwaysPaper") {
      this.player1 = new PaperStrategy();
    } else if (player1Strategy === "AlwaysScissors") {
      this.player1 = new ScissorsStrategy();
    } else if (player1Strategy === "Ask") {
      this.player1 = new AskForMoveStrategy();
    } else {
      this.player1 = new RandomStrategy();
    }

    // choose strategy for player2
    if (player2Strategy === "Random") {
      this.player2 = new RandomStrategy();
    } else if (player2Strategy === "AlwaysRock") {
      this.player2 = new RockStrategy();
    } else if (player2Strategy === "AlwaysPaper") {
      this.player2 = new PaperStrategy();
    } else if (player2Strategy === "AlwaysScissors") {
      this.player2 = new ScissorsStrategy();
    } else if (player2Strategy === "Ask") {
      this.player2 = new AskForMoveStrategy();
    } else {
      this.player2 = new RandomStrategy();
    }

    this.player1Score = 0;
    this.player2Score = 0;
    this.round = 0;
    this.maxRounds = 3;
    this.setScoreDisplay();

    clearMessages();
    while (this.round < this.maxRounds) {
      await this.playRound();
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

function waitForEvent(elements, event) {
  let handlers = [];
  return new Promise((resolve) => {
    elements.forEach((element, index) => {
      handlers[index] = function (e) {
        console.log(`Event ${event} happened on ${element.innerHTML}`);
        elements.forEach((element, i) => {
          element.removeEventListener(event, handlers[i]);
        });
        resolve(element.id);
      };
      element.addEventListener(event, handlers[index]);
    });
  });
}

class AskForMoveStrategy extends Strategy {
  constructor() {
    super();
    this.name = "AskForMove";
    this.rockButton = document.querySelector("#rockButton1");
    this.paperButton = document.querySelector("#paperButton1");
    this.scissorsButton = document.querySelector("#scissorsButton1");
    // this.rockButton.addEventListener('click', function () {})
  }

  async getMove() {
    const id = await waitForEvent(
      [this.rockButton, this.paperButton, this.scissorsButton],
      "click"
    );
    if (id === "rockButton1") {
      return "rock";
    } else if (id === "paperButton1") {
      return "paper";
    } else if (id === "scissorsButton1") {
      return "scissors";
    }
    return;
  }
}
