let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
let generateTarget = (number) => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (user, computer, target) => {
  if (Math.abs(user - target) <= Math.abs(computer - target)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } else {
    return (humanScore++);
  }
};
const advanceRound = () => {
  currentRoundNumber++;
};