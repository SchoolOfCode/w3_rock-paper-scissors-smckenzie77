// dom variables
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const determineWinner = document.querySelector(".determineWinner");

// to begin the game and scoring at 0 
let userChoice = rockButton|| paperButton || scissorsButton;
let computerChoice;
let pscore = 0;
let cscore = 0;
let round = 0;
rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);


//function getUserChoice (userChoice){}
  
  function getComputerChoice() {
   let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice ='rock';
        return 'rock';
    } else if(computerChoice <= 0.67) {
        computerChoice ='paper';
        return 'paper';  
    } else {
         computerChoice = 'scissors';
         computerChoice ='scissors';
            return 'scissors';
    }
  }

function determineWinner (userChoice, computerChoice) {
  if (userChoice === rockButton && computerChoice === 'rock'){
    guessResult.innerText = "it\'s a tie!";
  } else if (userChoice === rockButon && computerChoice === 'paper'){
    guessResult.innerText = "computer wins";
  } else if(userChoice === rockButton && computerChoice === 'scissors'){ 
    guessResult.innerText = "player wins";
  }
}

/*function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'paper'){
      if (compterChoice === 'scissors') {
        return 'Computer wins!';
      }else {
        return 'You win!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } 
  };*/
  
  function playGame() { 
    getComputerChoice();
    determineWinner(userChoice,computerChoice);
    return;
  } 

  playGame()
  // let userChoice = getUserChoice();
  // let computerChoice = getComputerChoice();
  // console.log(`you played ${userChoice}`);
  // console.log(`computer played ${computerChoice}`);