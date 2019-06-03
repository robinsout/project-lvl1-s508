import generateNumber from '../utils';
import gameProcess from '..';

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

const gcdGame = (gameStarted = false) => {
  // If game not started yet, passing game function to the engine
  // If no, game already started, passing game data to the engine
  if (gameStarted === false) {
    return gameProcess(gcdGame);
  }
  const randomNum1 = generateNumber(1, 30);
  const randomNum2 = generateNumber(1, 30);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGcd(randomNum1, randomNum2).toString();
  return [gameDescription, question, correctAnswer];
};

export default gcdGame;
