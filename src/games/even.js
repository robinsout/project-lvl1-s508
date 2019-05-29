import generateNumber from '../utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = num => (num % 2 === 0);

const checkEvenGame = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? ('yes') : ('no');
  return [gameRules, question, correctAnswer];
};

export default checkEvenGame;
