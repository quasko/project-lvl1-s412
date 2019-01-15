const maxRandomValue = 100;
const getRandom = () => Math.round(Math.random() * maxRandomValue);

const isEven = number => number % 2 === 0;

const evenTask = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default evenTask;
