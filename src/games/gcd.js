import generateNumber from '../utils';
import playGame from '..';

const getGcd = (randomNum1, randomNum2) => {
  let x = randomNum1;
  let y = randomNum2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => playGame(gameDescription, () => {
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGcd(randomNum1, randomNum2).toString();
  return [question, correctAnswer];
});

export default gcdGame;
