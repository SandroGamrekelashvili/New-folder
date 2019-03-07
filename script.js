const game = () => {
  let pScore = 0;
  let cScore = 0;

  const gameContainer = document.querySelector("section.game");
  const playBtn = gameContainer.querySelector(".intro button");
  const resetBtn = gameContainer.querySelector("button.startOver");
  const introScreen = gameContainer.querySelector(".intro");
  const match = gameContainer.querySelector(".match");

  const options = gameContainer.querySelectorAll(".options button");
  const playerHand = gameContainer.querySelector(".player-hand");
  const computerHand = gameContainer.querySelector(".computer-hand");
  const hands = gameContainer.querySelectorAll(".hands img");
  
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");


  const startGame = () => {

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
    resetBtn.addEventListener("click", () => {
      playerScore.innerText = '0';
      computerScore.innerText = '0';
      pScore = cScore = 0;
      console.log("rest");
    });
  };


  const playMatch = () => {


    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });


    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {

        const computerNumber = Math.round(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {

          compareHands(this.textContent, computerChoice);
          playerHand.src = `assets/${this.textContent}.png`;
          computerHand.src = `assets/${computerChoice}.png`;
        }, 2000);


        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }


    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }


    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
