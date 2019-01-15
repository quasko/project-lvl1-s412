import { helloUser, gameEngine } from '..';

const maxRandomValue = 100;
const helpMessage = 'Find the greatest common divisor of given numbers.';

const getRandom = () => Math.round(Math.random() * maxRandomValue);

const gcd = (numbers) => {
  const step = (number1, number2) => {
    if (number1 % number2 === 0) {
      return number2;
    }
    return step(number2, number1 % number2);
  };

  return step(numbers[0], numbers[1]);
};

const gcdTask = () => {
  const numbers = [getRandom(), getRandom()];
  const question = `${numbers[0]} ${numbers[1]}`;
  const correctAnswer = gcd(numbers);
  return { question, correctAnswer };
};

export default () => {
  const user = helloUser(helpMessage);
  gameEngine(gcdTask, user);
};
