import { gameEngine } from '..';
import getRandom from '../utils';

const maxRandomValue = 50;
const minRandomValue = 3;

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const step = (num1, num2) => {
    if (num1 % num2 === 0) {
      return num2;
    }
    return step(num2, num1 % num2);
  };

  return step(number1, number2);
};

const gcdTask = () => {
  const number1 = getRandom(maxRandomValue, minRandomValue);
  const number2 = getRandom(maxRandomValue, minRandomValue);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return { question, correctAnswer };
};

export default () => {
  gameEngine(gcdTask, description);
};
