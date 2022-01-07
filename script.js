let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
};
const compareGuesses = (num1,num2,num3) => {
  const diff1 = Math.abs(num1-num3);
  const diff2 = Math.abs(num2-num3);
  if(diff1 > diff2){
    return false
  } else {
    return true
  }
};
const updateScore = name => {
  if (name ==='human'){
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1 
};