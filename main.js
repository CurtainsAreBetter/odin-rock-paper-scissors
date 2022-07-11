
function computerPlay() {
  // get random number between 1 and 3
  let num = Math.floor(Math.random() * 3) + 1;
  switch(Math.floor(Math.random() * 3) + 1) {
    case 1: 
      return "Rock";
    case 2:
      return "Paper";
    case 3: 
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection){
  let ps = playerSelection.toUpperCase();
  let cs = computerSelection.toUpperCase();
  let result;
  switch (ps) {
    case "ROCK":
      switch (cs) {
        case "PAPER":
          return "lose";
        case "SCISSORS":
          return "win";
        default: 
          return "tie";
      }
      break;
    case "PAPER": 
      switch (cs) {
          case "ROCK":
            return "win";
          case "SCISSORS":
            return "lose";
          default: 
            return "tie";
        }
        break;
    case "SCISSORS":
      switch (cs) {
          case "PAPER":
            return "win";
          case "ROCK":
            return "lose";
          default: 
            return "tie";
        }
        break;
    }
}

function oldGame() {
  let compScore = 0;
  let userScore = 0;

  let results;
  for (let i = 0; i < 5; i++) {
    let player = prompt("Please enter [rock, paper, or scissors]");
    let compGuess = computerPlay();
    results = playRound(player, compGuess);
    let output;
    switch (results) {
    case "win": 
      output = `You won round ${i + 1}!`;
      userScore++;
      break;
    case "lose":
      output = `You lost round ${i + 1}`;
      compScore++;
      break;
    case "tie": 
      output = `You tied this round (${i + 1})!`
      userScore++;
      compScore++;
      break;
    }
    console.log(`Computer played ${compGuess}`);
    console.log(`User Played ${player}`);
    console.log(`${output}\nCurrent score: ${userScore} v. ${compScore}`);
  }
  if (compScore > userScore) {
    console.log("Computer wins! Game over");
  } else if (compScore < userScore) {
    console.log("User wins! Game over");
  } else {
    console.log("Tie game! Game over");
  }
}

function welcomeToGame() {
  const welcomeBtn = document.querySelector('#play-game');
  welcomeBtn.addEventListener('click', () => {
    const welcomeSign = document.querySelector('#welcome-screen');
    welcomeSign.classList.add('hidden');

    document.querySelector('#game-screen')
      .classList
      .remove('hidden');
  })
}
welcomeToGame();