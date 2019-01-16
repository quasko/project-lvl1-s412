import gameEngine from '..';
import getRandom from '../utils';

const maxRandomValue = 50;
const minRandomValue = 3;

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const gcdTask = () => {
  const number1 = getRandom(maxRandomValue, minRandomValue);
  const number2 = getRandom(maxRandomValue, minRandomValue);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();
  return { question, correctAnswer };
};

export default () => {
  gameEngine(gcdTask, description);
};
