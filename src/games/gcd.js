import checkAndShowResults from '..';
import { generateNumber } from '../utils';

const getGCD = (randomNum1, randomNum2) => {
  let x = Math.abs(randomNum1);
  let y = Math.abs(randomNum2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gameRules = 'Find the greatest common divisor of given numbers.';
const numberOfQuestions = 3;

const gcdGame = () => {
  let iter = 0;
  do {
    iter += 1;
    const randomNum1 = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = getGCD(randomNum1, randomNum2).toString();
    const result = checkAndShowResults(gameRules, question, correctAnswer, iter);
    if (result === false) {
      break;
    }
  } while (iter < numberOfQuestions);
};

export default gcdGame;
