      
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
       return "rock";
     } if (choice === 1) {
       return "paper";
     } if (choice === 2) {
       return "scissors";
     }
 } 
 
 let playerScore = 0
 let comptScore = 0


 

const buttons = document.querySelectorAll("button");

const r = document.getElementById("rock")
const p = document.getElementById("paper")
const s = document.getElementById("scissors")

function getButton() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection;
      if(button.id == "rock") playerSelection = "rock";
      if(button.id == "paper") playerSelection = "paper";
      if(button.id == "scissors") playerSelection = "scissors";

      const computerSelection = getComputerChoice();
    
    
      playRound(playerSelection, computerSelection);
      

      document.getElementById('yourScore').innerHTML = "Your score: " + playerScore;
      document.getElementById('comptScore').innerHTML = "Computers score: " + comptScore;
      document.getElementById('comptChoice').innerHTML = "Computer Chose: " + computerSelection;
      document.getElementById('yourChoice').innerHTML = "You Chose: " + playerSelection;

      document.getElementById('roundWinner').innerHTML = declareWinner() + " this round";
      
      
      isGameOver();
 
     }) 
  })
}

getButton()

function displayGameover() {
  const gameover = document.createElement('div');
  gameover.classList.add('gameover');
  gameover.innerHTML = 'Game Over';
  document.body.appendChild(gameover);
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie"
  }
  if( (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')) {
       playerScore ++
       roundWinner = "player"
      
    }
  if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ){
       comptScore ++
       roundWinner = "computer"
      
    } else {
      return 'error'
    }
}


function declareWinner() {
  if (roundWinner === 'tie') {
     return "it's a tie"
  } else if (roundWinner === "player") {
    return "you won"
  } else if (roundWinner === "computer") {
    return "you lost"
  } else {
    return "error"
  }
}



function isGameOver() {
  const gameWinner = document.createElement('div')
  gameWinner.classList.add('gameWinner')

  if (playerScore === 5) {
    gameWinner.innerHTML = "You Won the Game";
    displayGameover();
  } else if (comptScore === 5) {
    gameWinner.innerHTML = "You Lost the Game";
    displayGameover();
  } else {
    return "error";
  }
  document.body.appendChild(gameWinner);
  reset()

}


function reset() {
  const replayButton = document.createElement('button');
  replayButton.classList.add('replay');
  replayButton.innerHTML = "Replay?"
  document.body.appendChild(replayButton)
  
}






/*function play(playerSelection) {

r.addEventListener("click", () => {
  playerSelection = "rock"
});

p.addEventListener("click", () => {
  playerSelection="paper"
});

s.addEventListener("click", () => {
  playerSelection="scissors"
});

const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);


playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

}

play()*/


 
 /* for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Pick a move');
    console.log(playerSelection)
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(comptScore);
    } */


