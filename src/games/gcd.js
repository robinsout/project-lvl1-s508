import generateNumber from '../utils';
import playGame from '..';

const getGcd = (num1, num2) => ((num2 === 0) ? num1 : getGcd(num2, num1 % num2));

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const num1 = generateNumber(1, 30);
  const num2 = generateNumber(1, 30);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, () => gcdGame());
