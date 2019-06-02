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
  let result;
  if (gameStarted === false) { // Game not started yet, passing game function to the engine
    result = gameProcess(gcdGame);
  } else if (gameStarted === true) { // Game already started, passing game data to the engine
    const randomNum1 = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = getGcd(randomNum1, randomNum2).toString();
    result = [gameDescription, question, correctAnswer];
  }
  return result;
};

export default gcdGame;
