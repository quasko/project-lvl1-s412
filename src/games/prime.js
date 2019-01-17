import gameEngine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomNumber = -100;
const maxRandomNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  const maxDenom = Math.sqrt(number);
  for (let i = 2; i <= maxDenom; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeTask = () => {
  const number = getRandom(maxRandomNumber, minRandomNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => {
  gameEngine(primeTask, description);
};
