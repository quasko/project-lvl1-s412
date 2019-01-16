import gameEngine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const maxStep = 10;
const minStep = 3;
const progressionLength = 10;
const maxStartValue = 20;

const progressionTask = () => {
  const step = getRandom(maxStep, minStep);
  const start = getRandom(maxStartValue);
  const missedValueIndex = getRandom(progressionLength - 1);
  const progressionArray = Array(progressionLength).fill(0)
    .reduce((acc, item, index) => [...acc, acc[index] + step], [start]);
  const correctAnswer = progressionArray[missedValueIndex].toString();
  progressionArray[missedValueIndex] = '..';
  const question = progressionArray.join(' ');
  return { question, correctAnswer };
};

export default () => {
  gameEngine(progressionTask, description);
};
