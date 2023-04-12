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
 
 
 function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
     return "it's a tie"
   }
   if( (playerSelection === 'rock' && computerSelection === 'scissors') ||
     (playerSelection === 'scissors' && computerSelection === 'paper') ||
     (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore ++
        return "you won"
       
     }
   if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
     (computerSelection === 'scissors' && playerSelection === 'paper') ||
     (computerSelection === 'paper' && playerSelection === 'rock') ){
        comptScore ++
        return "computer won"
       
     } else {
       return 'error'
     }
 }
  
 
 for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Pick a move');
    console.log(playerSelection)
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(comptScore);
    }
    
    function declareWinner() {
        if (playerScore === comptScore) {
            return "no one won"
        } 
        if (playerScore > comptScore) {
            return "you won the game"
        } else {
            return "you lost the game"
        }
    }

    console.log(declareWinner());
