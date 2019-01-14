import readlineSync from 'readline-sync';

const maxRandomValue = 100;

const getUserName = () => readlineSync.question('May I have your name? ');

const endGameMessage = (isWin, user) => (isWin ? `Congratulations, ${user}!` : `Let's try again, ${user}!`);

const getRandom = () => Math.round(Math.random() * maxRandomValue);

export const helloUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const isEvenGame = (user, correntCount) => {
  if (correntCount === 3) {
    return console.log(endGameMessage(true, user));
  }
  const number = getRandom();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number} \nYour answer: `);
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(endGameMessage(false, user));
  }
  console.log('Correct!');
  return isEvenGame(user, correntCount + 1);
};
