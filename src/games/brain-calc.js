import { helloUser, gameEngine } from '..';

const operations = ['+', '-', '*'];
const maxRandomValue = 20;
const helpMessage = 'What is the result of the expression?';
const getRandom = () => Math.round(Math.random() * maxRandomValue);
const getRandomOperation = signs => signs[Math.floor(Math.random() * signs.length)];

const calculate = (numbers, sign) => {
  switch (sign) {
    case '*':
      return numbers[0] * numbers[1];
    case '+':
      return numbers[0] + numbers[1];
    case '-':
      return numbers[0] - numbers[1];
    default:
      return false;
  }
};

const calcTask = () => {
  const sign = getRandomOperation(operations);
  const numbers = [getRandom(), getRandom()];
  const question = `${numbers[0]} ${sign} ${numbers[1]}`;
  const correctAnswer = calculate(numbers, sign);
  return { question, correctAnswer };
};

export default () => {
  const user = helloUser(helpMessage);
  gameEngine(calcTask, user);
};
