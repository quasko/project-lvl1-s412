import { gameEngine } from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const maxStep = 10;
const minStep = 3;
const progressionLength = 10;
const maxStartValue = 20;

const progressionTask = () => {
  const stepValue = getRandom(maxStep, minStep);
  const startValue = getRandom(maxStartValue);
  const missedValueIndex = getRandom(progressionLength - 1);
  const progressionArray = Array(progressionLength).fill(0)
    .reduce((acc, item, index) => [...acc, acc[index] + stepValue], [startValue]);
  const correctAnswer = progressionArray[missedValueIndex];
  progressionArray[missedValueIndex] = '..';
  const question = progressionArray.join(' ');
  return { question, correctAnswer };
};

export default () => {
  gameEngine(progressionTask, description);
};
