import readlineSync from 'readline-sync';

const maxCorrectAnswers = 3;

export default (taskFunction, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  const runGame = (currentCount = 0) => {
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
    return runGame(currentCount + 1);
  };

  const isWin = runGame();
  const endGameMessage = isWin ? `Congratulations, ${user}!` : `Let's try again, ${user}!`;

  console.log(endGameMessage);
};
