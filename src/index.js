import readlineSync from 'readline-sync';

const maxRandomValue = 100;
const maxCorrectAnswers = 3;

const endGameMessage = (isWin, user) => (isWin ? `Congratulations, ${user}!` : `Let's try again, ${user}!`);

const getRandom = () => Math.round(Math.random() * maxRandomValue);

const isEven = number => number % 2 === 0;

export const helloUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isEvenGame = (correntCount) => {
  if (correntCount === maxCorrectAnswers) {
    return true;
  }
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return isEvenGame(correntCount + 1);
};

export default () => {
  const user = helloUser();
  console.log(endGameMessage(isEvenGame(0), user));
};
