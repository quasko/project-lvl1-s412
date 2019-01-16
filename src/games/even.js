import gameEngine from '..';
import getRandom from '../utils';

const maxRandomValue = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const evenTask = () => {
  const question = getRandom(maxRandomValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  gameEngine(evenTask, description);
};
