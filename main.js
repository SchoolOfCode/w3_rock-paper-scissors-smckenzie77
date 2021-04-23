// dom variables
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
//const determineWinner = document.querySelector(".determineWinner");

// to begin the game and scoring at 0 
let userChoice = rockButton|| paperButton || scissorsButton;
let computerChoice;
let playerPick = "";
/*let pscore = 0;
let cscore = 0;
let round = 0;*/
rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

let playerPlay = () => {
  rockButton.addEventListener("click", function(){
    return playerPick = 'rock';
  });
  
  paperButton.addEventListener("click", function(){
   return playerPick = "paper";
  });
  
  scissorsButton.addEventListener("click", function(){
    return playerPick = "scissors";
  });
}

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
        return 'scissors';
    }
  }

  function playGame() { 
    getComputerChoice();
    determineWinner(userChoice, computerChoice);
    console.log(`you played ${userChoice}`);
    console.log(`computer played ${computerChoice}`);
    return;
  } 
  
function determineWinner(userChoice, computerChoice) {
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
}

playGame()
/* before i added in the buttons the code worked fine but
I cant seem to get the functionality */


//all my previous code is below which worked in the console - cannot seem to get it to work with buttons
/*
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const guessResult = document.querySelector(".guessResult");

//create functions for select rock/paper/scissors

rockButton.addEventListener("click", selectRock)
paperButton.addEventListener("click", selectPaper)
scissorsButton.addEventListener("click", selectScissors)

let userChoice = rockButton|| paperButton || scissorsButton;
function getUserChoice (userChoice){
}

function selectRock(){
  if (userChoice === rockButton && computerChoice === 'rock'){
    guessResult.innerText = "it\'s a tie!";
  } else if (userChoice === rockButton && computerChoice === 'paper'){
    guessResult.innerText = "computer wins"
  } else (userChoice === rockButton && computerChoice === 'scissors')
  {
    guessResult.innerText = "player wins"
  }
}
function selectPaper(){}
function selectScissors(){}


  
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
  
 function determineWinner(userChoice,computerChoice) {
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
  };
  
  function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(`you played ${userChoice}`);
    console.log(`computer played ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  };

  playGame()

 if (userChoice === "rock" && computerChoice === 'rock'){
    guessResult.innerText = "it\'s a tie!";
  } else if (userChoice == rockButton && computerChoice === 'paper'){
    guessResult.innerText = "computer wins";
  } else if(userChoice === rockButton && computerChoice === 'scissors'){ 
    guessResult.innerText = "player wins";
  }

/* 
 let userChoice = getUserChoice();
 let computerChoice = getComputerChoice();
 console.log(`you played ${userChoice}`);
 console.log(`computer played ${computerChoice}`);
 rockButton.addEventListener("click", function(){
  return userChoice= 'rock';
})
*/
