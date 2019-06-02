import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = num => (num % 2 === 0);

const evenGame = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? ('yes') : ('no');
  return [gameDescription, question, correctAnswer];
};

export default evenGame;
