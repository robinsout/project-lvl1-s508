import generateNumber from '../utils';
import playGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getEvenGameData = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, getEvenGameData);
