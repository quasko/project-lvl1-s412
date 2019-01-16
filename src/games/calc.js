import gameEngine from '..';
import getRandom from '../utils';

const operations = ['+', '-', '*'];
const maxRandomValue = 20;
const description = 'What is the result of the expression?';

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
  const sign = operations[getRandom(operations.length - 1)];
  const numbers = [getRandom(maxRandomValue), getRandom(maxRandomValue)];
  const question = `${numbers[0]} ${sign} ${numbers[1]}`;
  const correctAnswer = calculate(numbers, sign).toString();
  return { question, correctAnswer };
};

export default () => {
  gameEngine(calcTask, description);
};
