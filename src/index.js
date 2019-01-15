import readlineSync from 'readline-sync';
import isEvenTask from './games/brain-even';
import calcTask from './games/brain-calc';

const maxCorrectAnswers = 3;

const endGameMessage = (isWin, user) => (isWin ? `Congratulations, ${user}!` : `Let's try again, ${user}!`);

export const helloUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const game = (taskFunction, correntCount) => {
  if (correntCount === maxCorrectAnswers) {
    return true;
  }
  const { question, correctAnswer } = taskFunction();
  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  if (userAnswer !== correctAnswer.toString()) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return game(taskFunction, correntCount + 1);
};

export const startCalcGame = () => {
  const user = helloUser();
  console.log(endGameMessage(game(calcTask, 0), user));
};

export const startIsEvenGame = () => {
  const user = helloUser();
  console.log(endGameMessage(game(isEvenTask, 0), user));
};
