import { helloUser, gameEngine } from '..';

const maxRandomValue = 100;
const helpMessage = 'Answer "yes" if number even otherwise answer "no".';

const getRandom = () => Math.round(Math.random() * maxRandomValue);

const isEven = number => number % 2 === 0;

const evenTask = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  const user = helloUser(helpMessage);
  gameEngine(evenTask, user);
};
