
//======================
//    GAME FUNCTIONS
//======================

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



// ======================================
//         Dom editing functions
// ======================================


// Scores
function getCompScore() {
  return Number(document.querySelector('#comp-score').textContent);
}
function getUserScore() {
  return Number(document.querySelector('#user-score').textContent);
}

function setCompScore(score) {
  document.querySelector('#comp-score').textContent = `${score}`;
}
function setUserScore(score) {
  document.querySelector('#user-score').textContent = `${score}`;
}

// Round number
function getRound() {
  return Number(document.querySelector('#round-num').textContent);
}
function setRound(num) {
  document.querySelector('#round-num').textContent = `${num}`;
}

// Round Images/ move
function setUserChoice(mv) {
  const img = document.querySelector('#info-pic-user');
  const move = document.querySelector('#info-move-user');
  switch(mv) {
    case 'rock':
      move.textContent = 'Rock';
      img.removeAttribute('src');
      img.setAttribute('src', 'rock.jpg');
      break;
    case 'paper':
      move.textContent = 'Paper';
      img.removeAttribute('src');
      img.setAttribute('src', 'paper.jpg');
      break;
    case 'scissors':
      move.textContent = 'Scissors';
      img.removeAttribute('src');
      img.setAttribute('src', 'scissors.jpg');
      break;
    default:
      return 'ERROR';
  }
}
function setCompChoice(mv) {
  const img = document.querySelector('#info-pic-comp');
  const move = document.querySelector('#info-move-comp');
  switch(mv) {
    case 'rock':
      move.textContent = 'Rock';
      img.removeAttribute('src');
      img.setAttribute('src', 'rock.jpg');
      break;
    case 'paper':
      move.textContent = 'Paper';
      img.removeAttribute('src');
      img.setAttribute('src', 'paper.jpg');
      break;
    case 'scissors':
      move.textContent = 'Scissors';
      img.removeAttribute('src');
      img.setAttribute('src', 'scissors.jpg');
      break;
    default:
      return 'ERROR';
  }

}

// round result change
// from user perspective (win, lose, tie)
function setRoundResult(res) {
  const output = document.querySelector('#round-results');
  switch (res) {
    case 'win':
      output.textContent = "User wins this round";
      break;
    case 'lose':
      output.textContent = "Computer wins this round";
      break;
    case 'tie':
      output.textContent = "User has tied with Computer this round";
      break;
    default:
      return 'ERROR';
  }
}




// Screen changes
function welcomeScreenToGameScreen() {
  const welcomeBtn = document.querySelector('#play-game');
  welcomeBtn.addEventListener('click', () => {
    const welcomeSign = document.querySelector('#welcome-screen');
    welcomeSign.classList.add('hidden');

    document.querySelector('#game-screen')
      .classList
      .remove('hidden');
  })
}

// Results sub screen
function hideResults() {
  document.querySelector('.round-info').classList.add('hidden');
}
function showResults() {
  document.querySelector('.round-info').classList.remove('hidden');
}
