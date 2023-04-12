function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
        console.log(choice)
       return ("rock");
     } else if (choice === 1) {
       return ("paper");
     } else {
       return ("scissors");
     }
   }
 
   console.log(getComputerChoice)

   let message = prompt("Do you choose rock, paper, or scissors?")
 


function playRound(playerSelection, computerSelection) {
    
      if (playerSelection === "rock") {
        if (computerSelection === "rock") {
          return "it's a tie";
        } else if (computerSelection === "paper") {
          return "you lose";
        } else {
          return "you win";
        }
      } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
          return "it's a tie";
        } else if (computerSelection === "Rock") {
          return "you win";
        } else {
          return "you lose";
        }
      } else if (playerSelection === "scissors") {
          if (computerSelection === "scissors") {
            return "it's a tie";
          } else if (computerSelection === "rock") {
            playerScore += 1;
            return "you win";
          } else {
            return "you lose";
          }
        } else {
          return "it's a draw";
        }
          playerSelection.localeCompare(computerSelection, undefined, { sensitivity: 'accent' }) === 0;
      }
  



const playerSelection = message;
console.log(playerSelection)
console.log(getComputerChoice())
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(label) {
    function playRound(playerSelection, computerSelection) {
       for (let i = 0; i < 5; i++);
     }
    const res = playRound(playerSelection, computerSelection);
    return res; 
   }
