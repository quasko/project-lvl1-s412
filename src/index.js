import readlineSync from 'readline-sync';

const maxCorrectAnswers = 3;

export const helloUser = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(`${gameDescription}\n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const gameEngine = (taskFunction, description) => {
  const user = helloUser(description);
  const gameStep = (currentCount) => {
    if (currentCount === maxCorrectAnswers) {
      return true;
    }
    const { question, correctAnswer } = taskFunction();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
    return gameStep(currentCount + 1);
  };

  const endGameMessage = gameStep(0) ? `Congratulations, ${user}!` : `Let's try again, ${user}!`;

  console.log(endGameMessage);
};
